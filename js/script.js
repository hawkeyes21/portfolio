$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 7000,
		pagination: true 
	});

    // typing effect on superSlides
	var typed = new Typed(".typed", {
		strings: ["At AIM, we make the magic happen...", "Work with the very best...", "Join use create the future."],
		typeSpeed: 90,
		loop: true,
		startDelay: 500,
		showCursor: false
	})

    // carousel (stats section)
	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
	});

    // pie chart used in carousel
	$('.chart').easyPieChart({
		easing: 'easeInOut',
		barColor: '#d35400',
		trackColor: '#bdc3c7',
		scaleColor: false,
		lineWidth: 4,
		size: 152
    });


    $('#readMore').click(function(){
        if($('#hiddenText').css("display") == 'none')
        {
            $('#hiddenText').css("display", "initial");
            $('#readMore').text('Read Less');    
        }
        else
        {
            $('#hiddenText').css("display", "none");
            $('#readMore').text('Read More');       
        }   
    })

    // navigation bar click event
	$('#navigation li a').click(function(e){
		e.preventDefault();
        $("#navigation li a.dropdown-active").removeClass('dropdown-active');
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
        $(this).addClass('dropdown-active');
		$('html, body').animate({scrollTop: targetPosition}, "slow");
	});


    // sticky navigation bar
    const nav = $('#navigation');
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);
    function stickyNavigation(){
    	var body = $("body");

    	if($(window).scrollTop() >= navTop)
    	{
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	}
    	else
    	{
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav");
    	}
    }

    // contact us form validation
    $('#contactUsSubmitButton').click(function(){
        var nameValue = $('#contactUsName').val();
        var emailValue = $('#contactUsEmail').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        $('#emailWarning').text('');
        $('#nameWarning').text('');   
        if(emailValue.length == 0)
        {
            $('#emailWarning').text('Email Cannot Be Null!');
            return false;
        }
        $('#emailWarning').text('');
        if(!regex.test(emailValue))
        {
            $('#emailWarning').text('Invalid Email Format!');
            return false
        }
        $('#emailWarning').text('');
        if(nameValue.length == 0)
        {  
            $('#nameWarning').text('Name Cannot Be Null!');
            return false;
        }
        $('#nameWarning').text('');            
    });
});