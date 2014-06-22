# compiles saved data into ember fixtures

PATH = File.join(File.dirname(__FILE__), '../app/scripts/data')

# retrieve data from files
films = Dir.glob('imported/films/rotten_tomatoes/*.json').map do |f|
  File.read(f)
end

reviews = Dir.glob('imported/reviews/nziff/*.json').map do |f|
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

# temporarily make all films belong to auckland
File.open(File.join(PATH, 'regions.js'), 'w') do |f|
  film_ids = Dir.glob('imported/films/rotten_tomatoes/*.json').map do |file|
    file.sub(/\D+(\d+)\D+/, '\1')
  end
  regions = ["{ id: 'auckland', name: 'Auckland', films: [#{film_ids.join(',')}] }","{ id: 'wellington', name: 'Wellington', films: [] }"]
  fixtures = ['NziffPicks.Region.FIXTURES = [',regions.join(','),'];'].join
  f.write(fixtures)
end
