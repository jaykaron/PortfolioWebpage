
$(document).ready(function(){
    $("#footer").slideDown();
    var slimmed = false;

    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if (slimmed == false && scrollTop > 4)
      {
        slimmed = true;
        smallTop();
      }
      else if (slimmed && scrollTop < 4)
      {
        bigTop();
        slimmed = false;
      }
    });

    $(".menuBox").click(function(){scrollToAnchor($(this).attr('title'));});
});

function smallTop()
{
  $("#banner").animate({height:"5em"})
  $("#bannerTopLayer").animate({height:"70%"})
  $("#titleDiv").animate({height:"100%", width:"100%", left:"0%", top:"0%"})
  $("#homeButtonDiv").animate({width:"3.5em"})
  $("#logo").animate({marginTop:"10%"})
  $("#menu").animate({height:"35%", top:"3.5em"})
  $("#main").animate({ top:"15em"})
}

function bigTop()
{
  $("#banner").animate({height:"20em"})
  $("#bannerTopLayer").animate({height:"18em"})
  $("#titleDiv").animate({height:"20%", width:"15em", top:"80%"})
  $("#homeButtonDiv").animate({width:"15em"})
  $("#logo").animate({marginTop:"6%"})
  $("#menu").animate({height:"1.75em", top:"18em"})
  $("#main").animate({ top:"22em"})
}

function scrollToAnchor(anchorName)
{
  console.log(anchorName);
  var idString= "a[name='"+anchorName+"']"
  console.log(idString);
  var anchorObj = $(idString);
  //'"+anchorName"']");
  $("html,body").animate({scrollTop: anchorObj.offset().top+200},'slow');
}
