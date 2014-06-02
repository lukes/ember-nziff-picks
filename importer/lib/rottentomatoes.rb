require 'open-uri'
require 'singleton'
require 'yaml'
require 'active_support/json'
require 'active_support/core_ext/hash'

class RottenTomatoes
  include Singleton

  def film(id)
    request("movies/#{id}.json?apikey=#{api_key}")
  end

  def search(opts)
    opts[:r] ||= 10
    opts[:p] ||= 1
    request("movies.json?q=#{opts[:q]}&page_limit=#{opts[:r]}&page=#{opts[:p]}&apikey=#{api_key}")
  end

  def reviews(id)
    request("movies/#{id}/reviews.json?review_type=top_critic&page_limit=50&page=1&country=us&apikey=#{api_key}")
  end

private

  def request(path)
    uri = URI::encode(api_root + path)
    ActiveSupport::JSON.decode(open(uri).read).with_indifferent_access
  end

  def api_root
    "http://api.rottentomatoes.com/api/public/v1.0/"
  end

  def api_key
    @api_key ||= YAML.load(File.read("secrets.yml"))["api_key"]
  end
end
