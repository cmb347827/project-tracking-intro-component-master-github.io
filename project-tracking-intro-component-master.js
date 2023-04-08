'use strict'; 

const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
};

$(window).resize(function(){
	location.reload();
});

$(window).on('load',function(){
	  let width = $(window).width();
	  
	  
	  let counter= 0;
	  $('.toggle').click(function(){
		  if(width < 1440){
			  
			  ++counter;
			  if(counter % 2 ){
				  //counter is odd.
				  console.log('open');
				  //menu is collapsed. Hide the hamburger ,show the close image, and open the menu
				  $('.hamburger').css('visibility','hidden').hide();
			      $('.close').css({'visibility':'visible','position':'absolute','right':'0'}).show();
			      $('.ui-menu').css({'display':'block','position':'absolute','width':'350px','margin': '0 auto','margin-top':'50px','text-align':'center','z-index':'999'}).menu({
					  menus: 'nav'
				  });
				  $('.ui-menu-item').hover(function(){
					  console.log('hover');
					  $(this).css('background-color',colors["Lighter Gray"]);
				  });
				  $('.ui-menu-item').mouseleave(function(){
					  console.log('mouseleave');
					  $(this).css('background-color',colors["White"]);
				  });
			  } else{
				  //menus is open
				  console.log('close');
				  $('.close').css('visibility','hidden').hide();
			      $('.hamburger').css({'visibility':'visible','position':'absolute','right':'0'}).show();
				  if(width < 1440){
			         $('.ui-menu').css('display','none').menu('collapse');
				  }
			  }
		  } else {//clicked in error}
		     
	      }
	  });
	 
});
