$(function(){        
  $("div[class*=gallery-]").each(
    function(){
        $(this).masonry();
    }
  )
});
