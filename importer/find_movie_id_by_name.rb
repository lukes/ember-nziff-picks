require 'open-uri'
require 'slop'

opts = Slop.parse do
  banner 'Usage: scrips.rb [options]'

  on 'q=', 'Film name'
  on 'k=', 'API key'
end

unless opts[:q] && opts[:k]
  puts opts
  exit
end

uri = URI::encode("http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=#{opts[:q]}&page_limit=10&page=1&apikey=#{opts[:k]}")
puts content = open(uri).read["total"]
