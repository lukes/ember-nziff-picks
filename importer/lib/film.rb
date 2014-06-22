require_relative 'rottentomatoes'

class Film
  def initialize(params)

    # save properties of payload that are exactly how we want them
    @film = params.slice(:id, :title, :year, :genres, :runtime, :synopsis, :tag, :slug)

    # flatten other properties
    @film[:critics_score] = params[:ratings][:critics_score]
    @film[:audience_score] = params[:ratings][:audience_score]

    @film[:directors] = Array(params[:abridged_directors]).map{|d|d[:name]}

    unless params[:posters][:original].match(/poster_default/)
      @film[:image_m] = params[:posters][:detailed]
      @film[:image_l] = params[:posters][:original]
    end

    @film[:rt_link] = params[:links][:alternate]

    @film[:region] = "auckland"

    # these are the URIs to grab next
    clips_link = params[:links][:clips]

    @film[:reviews] = Review.fetch_and_save_reviews(@film[:id])

    # from links grab :alternate, :clips, :reviews (although clips isn't that great)
  end

  def save
    puts "Saving film"
    # TODO merge with existing imported film
    File.open("imported/films/rotten_tomatoes/#{@film[:id]}.json", 'w') {|f| f.write(ActiveSupport::JSON.encode(@film)) }
  end

end
