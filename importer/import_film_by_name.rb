# given a name String, find matching films from RT
# and prompt whether to import it or not.

require 'open-uri'
require 'slop'
require 'yaml'
require 'active_support/json'
require 'active_support/core_ext/hash'

require_relative 'lib/film'
require_relative 'lib/rottentomatoes'

opts = Slop.parse do
  banner 'Usage: scrips.rb [options]'

  on 'q=', 'Film name'
end

unless opts[:q]
  puts opts
  exit
end

payload = RottenTomatoes.instance.search(opts[:q])

puts "#{payload[:total]} found"

payload[:movies].each do |film|
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
