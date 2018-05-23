
$(function loading(){

	  		var img = $("img");
	        var num = 0;

	  		img.each(function(i) {
	  			var oImg = new Image();
              
	  			oImg.onload = function(){
                    oImg.onload = null;
	  				num++ ;
	  				
	  				$(".loading b").html(Math.floor(num / $('img').length * 100) + "%");
	  				
	  				}
	  				if(num <= img.length ) {
	  					$(".loading").fadeOut(1000);
	  			}
	  			oImg.src = img[i].src;
	  		});
	  	});