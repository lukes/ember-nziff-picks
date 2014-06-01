class Film
  def initialize(params)

    # save properties of payload that are exactly how we want them
    @film = params.slice(:id, :title, :year, :genres, :runtime, :synopsis)

    # flatten other properties
    @film[:critics_score] = params[:ratings][:critics_score]
    @film[:audience_score] = params[:ratings][:audience_score]

    @film[:directors] = Array(params[:abridged_directors]).map{|d|d[:name]}

    unless params[:posters][:original].match(/poster_default/)
      @film[:image_m] = params[:posters][:detailed]
      @film[:image_l] = params[:posters][:original]
    end

    @film[:rt_link] = params[:links][:alternate]

    # these are the URIs to grab next
    clips_link = params[:links][:clips]
    reviews_link = params[:links][:reviews]

    # from ratings grab :critics_score and :audience_score
    # from posters grab :detailed and :original
    # from abridged_directors grab array of :name
    # from links grab :alternate, :clips, :reviews (although clips isn't that great)
  end
  def save
    puts "Saving"
    File.open("imported/#{@film[:id]}.json", 'w') {|f| f.write(ActiveSupport::JSON.encode(@film)) }
  end
end
