NziffPicks.Film = DS.Model.extend({
  title: DS.attr(''),
  year: DS.attr(''),
  genres: DS.attr(''),
  runtime: DS.attr(''),
  synopsis: DS.attr(''),
  critics_score: DS.attr(''),
  audience_score: DS.attr(''),
  directors: DS.attr(''),
  image_m: DS.attr(''),
  image_l: DS.attr(''),
  rt_link: DS.attr('')
  // belongs to region
});


NziffPicks.Film.FIXTURES = [
  {"id":"771306814","title":"Consuming Spirits","year":2012,"runtime":130,"synopsis":"Christopher Sullivan's animated dystopia is about as far from a cartoon-for-kids as they come. Relationships among the three main characters - Earl Gray, Gentian Violet, and Victor Blue - multiply and divide as their stories becomes increasingly complex, hilarious, and scary. The Huffington Post writes of the film's \"insanely meticulous construction\" and continues: \"The animation took 15 years of work... The characters were hand-drawn onto layers of glass which were then moved with needles and pins. The film seamlessly combines cutout animation, pencil drawing, collage, and stop-motion animation to create the haunting atmosphere of a self-contained world... (most of whose) characters walk shakily between self-medication and a bad trip... ugly characters (who) make up the most beautiful spectacle you've ever seen.\"","critics_score":89,"audience_score":73,"directors":[],"image_m":"http://content6.flixster.com/movie/11/16/79/11167956_det.jpg","image_l":"http://content6.flixster.com/movie/11/16/79/11167956_ori.jpg","rt_link":"http://www.rottentomatoes.com/m/consuming_spirits/"},
  {"id":"771306928","title":"Jimi: All Is by My Side","year":2013,"runtime":"","synopsis":"Andre 3000 steps into the role of Jimi Hendrix in this biopic focusing on the iconic rocker's recording of his Are You Experienced album. ~ Jeremy Wheeler, Rovi","critics_score":89,"audience_score":0,"directors":[],"rt_link":"http://www.rottentomatoes.com/m/jimi_all_is_by_my_side/"}
]
