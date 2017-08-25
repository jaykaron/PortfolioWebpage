var topHeight;

$(document).ready(function(){
    topHeight = $("#banner").height();
    var slimmed = false;
    if($(window).scrollTop() > 30)
    {
      slimmed = true;
      smallTop()
    }
    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
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
    $("#backToTop").click(function(){scrollToTop();});
    $(".menuBox").mouseenter(function(){hoverOverMenu($(this));});
    $(".menuBox").mouseleave(function(){hoverOffMenu($(this));});

});

// Shrink the nav Bar
function smallTop()
{
  $("#banner").animate({height:"5.5em"})
  $("#titleDiv").fadeOut(250);
  $("#backToTop").fadeIn(250);
}

// Enlarge the nav Bar
function bigTop()
{
  $("#banner").animate({height:topHeight})
  $("#titleDiv").delay(200).fadeIn();
  $("#backToTop").fadeOut(250);
}

// Scroll to specific section
function scrollToAnchor(anchorName)
{
  var idString= "h2[name='"+anchorName+"']"
  var anchorObj = $(idString);
  $("html,body").animate({scrollTop: anchorObj.offset().top-100},'slow');
}

// Scroll to top
function scrollToTop()
{
  $("html,body").animate({scrollTop: 0},'slow');
  bigTop();
}

function hoverOverMenu(menuBox)
{
  menuBox.children().children(".menuQuote").stop( true, true ).animate({opacity: 1.0});
}
function hoverOffMenu(menuBox)
{
  //$(".menuQuote").stop( true, true ).animate({opacity: 0.0});
  menuBox.children().children(".menuQuote").stop( true, true ).animate({opacity: 0.0});
}
