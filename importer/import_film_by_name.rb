# given a name String, find matching films from RT
# and prompt whether to import it or not.

require 'open-uri'
require 'slop'
require 'yaml'
require 'active_support/json'
require 'active_support/core_ext/hash'

require_relative 'film'

opts = Slop.parse do
  banner 'Usage: scrips.rb [options]'

  on 'q=', 'Film name'
end

unless opts[:q]
  puts opts and exit
end

apikey = YAML.load(File.read("secrets.yml"))["apikey"]
uri = URI::encode("http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=#{opts[:q]}&page_limit=10&page=1&apikey=#{apikey}")

content = ActiveSupport::JSON.decode(open(uri).read).with_indifferent_access

puts "#{content[:total]} found"

content[:movies].each do |film|
  puts "#{film[:id]}\t#{film[:year]}\t#{film[:title]}"
  puts "Save this film? [Y,n]"
  prompt = STDIN.gets.chomp.downcase
  if ["y", ""].include?(prompt)
    Film.new(film).save
    break
  else
    puts "Skipping"
  end
end
