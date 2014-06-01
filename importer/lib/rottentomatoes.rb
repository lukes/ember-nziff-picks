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

  def search(q)
    request("movies.json?q=#{q}&page_limit=10&page=1&apikey=#{api_key}")
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
