require 'digest'
require_relative 'rottentomatoes'

class Review

  # given a film_id, save a good review and a bad review
  # and return the ids of the reviews
  def self.fetch_and_save_reviews(film_id)
    review_ids = []
    review_payload = RottenTomatoes.instance.reviews(film_id)
    # find one good review, and one bad review
    good_review = review_payload[:reviews].detect do |review|
      review[:freshness] == "fresh"
    end
    bad_review = review_payload[:reviews].detect do |review|
      review[:freshness] != "fresh"
    end
    if good_review
      review_ids << Review.new(good_review.merge(film: film_id)).save
    end
    if bad_review
      review_ids << Review.new(bad_review.merge(film: film_id)).save
    end
    review_ids
  end

  def initialize(params)
    # save properties of payload that are exactly how we want them
    @review = params.slice(:film, :critic, :publication, :quote)

    # determine other properties
    @review[:positive] = params[:freshness] == "fresh"

    @review[:link] = params[:links][:review]

    # make up an id from the link
    @review[:id] = Digest::SHA256.hexdigest(@review[:link])[0,5]
  end

  def save
    puts "Saving #{type} review"
    File.open("imported/reviews/rotten_tomatoes/#{@review[:id]}.json", 'w') {|f| f.write(ActiveSupport::JSON.encode(@review)) }
    # return the id
    @review[:id]
  end

  def type
    @review[:positive] ? 'positive' : 'negative'
  end
end
