# refresh the data of saved films

require_relative 'lib/film'
require_relative 'lib/review'
require_relative 'lib/rottentomatoes'

# retrieve a list of film ids
films = Dir.glob('imported/films/*.json').map do |file|
  file.sub(/\D+(\d+)\D+/, '\1')
end

films.each do |film|
  payload = RottenTomatoes.instance.film(film)
  puts "Refreshing #{film} #{payload[:title]}"
  Film.new(payload).save
  # prevent api abuse by pausing between requests
  sleep 2
end
