# given a region String, scrape all data about a film from the NZIFF site.

require 'slop'

require_relative 'lib/nziff'

opts = Slop.parse do
  banner 'Usage: scrape_nziff_by_region.rb [options]'

  on 'r=', 'Region'
  on 'x=', 'Also scrape existing'
end

unless opts[:r]
  puts opts
  exit
end

region = opts[:r].downcase

film_slugs = Nziff.instance.fetch_slugs_by_region(region)

# TODO unless -x is true, reject the film_slugs of things we've already scraped

puts "#{film_slugs.count} found"

film_slugs.each do |slug|
  puts "Importing film with slug #{slug}"
  Nziff.instance.import(region, slug)
  # be a good internet citizen by pausing between requests
  sleep 7
end
