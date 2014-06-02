# compiles saved data into ember fixtures

PATH = File.join(File.dirname(__FILE__), '../app/scripts/data')

# retrieve data from files
films = Dir.glob('imported/films/*.json').map do |f|
  File.read(f)
end

reviews = Dir.glob('imported/reviews/*.json').map do |f|
  File.read(f)
end

# write data as fixtures
File.open(File.join(PATH, 'films.js'), 'w') do |f|
  fixtures = "NziffPicks.Film.FIXTURES = [#{films.join(',')}];"
  f.write(fixtures)
end

File.open(File.join(PATH, 'reviews.js'), 'w') do |f|
  fixtures = ['NziffPicks.Review.FIXTURES = [',reviews.join(','),'];'].join
  f.write(fixtures)
end
