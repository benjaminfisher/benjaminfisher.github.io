$(function(){
	var images =[];
	$('img').each(function(){
		images.push(this.src);
	});
	
	$.loadImages(images, function(){
		$('#load').fadeOut();
		
		$('#projects').cycle({
			fx:'fade',
			pause:true,
			pager:'#pList',
			timeout:7000
		});
		
		// Retrieve h3 labels from the individual projects and store in pLabels array
		var pLabels = new Array();
		$('#projects div h3').each(function(){
			pLabels.push($(this).text());
		})
		
		// Add a title attribute to each link in the pList dots from the pLables array
		$('#pList a').each(function(i){
			$(this).attr('title', pLabels[i]);
		});
	});
	
	$('#accordion').accordion({
		autoHeight:false
	});
	
	$('button').button();
	$('#about, #contact').hide();
	jQuery.easing.def = "easeInSine";
	
	// Main navigation scripting
	// current tab is styled in style.css under the .current class
	var tabs = $('nav ul li');
	$(tabs).click(function(event){
		if (!$(this).hasClass('current')) {
			event.preventDefault();
			
			$(tabs).removeClass('current');
			$(this).addClass('current');
			
			var target = $(this).children('a').attr('href');
			
			$('#content').children().fadeOut('fast').slideUp();
			$(target).slideDown();
			
			if (target == '#projects') {
				$('#pList').css('display', 'block');
			};
		}
	});
	
	$('#content')
		.mouseover(function(){$('#projects').cycle('pause');})
		.mouseout(function(){$('#projects').cycle('resume');});
		
	$('.screenshot').fancybox({
		'cyclic'		:   'true',
		'titlePosition'	:	'over',
		'transitionIn'  : 	'elastic',
		'onComplete'	:	function() {
			$("#fancybox-wrap").hover(function() {
				$("#fancybox-title").show();
			}, function() {
				$("#fancybox-title").hide();
			});
		}
	});
	
	// Animate the a fadein / fadeout for the social links
	$('#links li').mouseover(function(){
		$(this)
			.find('span')
			.fadeIn('fast');
	}).mouseleave(function(){  
		$(this)
			.find('span')
			.fadeOut('fast');
	});
	
	$('#logo').click(function(){
		var s = document.createElement('script');
		s.type='text/javascript';
		document.body.appendChild(s);
		s.src='http://s-ak.buzzfeed.com/raw/asteroids/js.js';
		void(0);
	});
});
