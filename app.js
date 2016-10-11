$(document).ready(function() {
	  $("form button:submit").click(function(){
	  	 var new_task = $('#shopping-list-entry').val();
	  	$('.shopping-list').append(' <li><span class="shopping-item">' + new_task + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
		  return false;
	  });
	$('body').on("click","li .shopping-item-toggle", function() {
   if($(this).parent().siblings('.shopping-item').hasClass("shopping-item__checked"))
   {
      $(this).parent().siblings('.shopping-item').removeClass("shopping-item__checked");
   }
   else
   {
     $(this).parent().siblings('.shopping-item').addClass("shopping-item__checked");
   }
   });
	$('body').on("click","li .shopping-item-delete", function() {
		$(this).parent().parent().remove()
	});
  });