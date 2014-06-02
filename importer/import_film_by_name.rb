# given a name String, find matching films from RT
# and prompt whether to import it or not.

require 'slop'

require_relative 'lib/film'
require_relative 'lib/review'
require_relative 'lib/rottentomatoes'

opts = Slop.parse do
  banner 'Usage: scrips.rb [options]'

  on 'q=', 'Film name'
  on 'p=', 'Page number (default 1)'
  on 'r=', 'Results per page (default 10)'
end

unless opts[:q]
  puts opts
  exit
end

payload = RottenTomatoes.instance.search(opts.to_hash)

puts "#{payload[:total]} found"

payload[:movies].each do |film|
  puts "#{film[:id]}\t#{film[:year]}\t#{film[:title]}\t#{film[:synopsis]}"
  puts "Save this film? [Y,n]"
  prompt = STDIN.gets.chomp.downcase
  if ["y", ""].include?(prompt)
    Film.new(film).save
    break
  else
    puts "Skipping"
  end
end
