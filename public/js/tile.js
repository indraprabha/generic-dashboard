
/*dust.render(
    "public/templates/tile", config,
    //{name:"{.name}", color:"{.color}", __link:"{.__link}", __path:"{.__path}", status:"{.status}", workdir:"{.workdir}", logdir:"{.logdir}"}, 
    function(err, out) {
  if(err) console.error(err);
  $('#widget_scroll_container').html(out);
});*/


dust.render("public/templates/tile", {}, function(err, out) {
    if(err) console.error(err);
    console.log(out);
    $('#'+id+"_container").replaceWith(out);
});
