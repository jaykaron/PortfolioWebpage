
$(document).ready(function(){
    var slimmed = false;
    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      console.log(scrollTop);
      if (slimmed == false && scrollTop > 30)
      {
        slimmed = true;
        smallTop();
      }
      else if (slimmed && scrollTop < 30)
      {
        bigTop();
        slimmed = false;
      }
    });

    $(".menuBox").click(function(){scrollToAnchor($(this).attr('linkDes'));});
});

function smallTop()
{
  $("#banner").animate({height:"5em"})
  $("#bannerTopLayer").animate({height:"70%"})
  $("#titleDiv").animate({height:"100%", width:"100%", left:"0%", top:"0%"})
  $("#homeButtonDiv").animate({width:"3.5em"})
  $("#logo").animate({marginTop:"10%"})
  $("#menu").animate({height:"35%", top:"3.5em"})
}

function bigTop()
{
  $("#banner").animate({height:"20em"})
  $("#bannerTopLayer").animate({height:"18em"})
  $("#titleDiv").animate({height:"20%", width:"15em", top:"70%"})
  $("#homeButtonDiv").animate({width:"15em"})
  $("#logo").animate({marginTop:"6%"})
  $("#menu").animate({height:"1.75em", top:"18em"})
}

function scrollToAnchor(anchorName)
{
  var idString= "h2[name='"+anchorName+"']"
  var anchorObj = $(idString);
  $("html,body").animate({scrollTop: anchorObj.offset().top-100},'slow');
}