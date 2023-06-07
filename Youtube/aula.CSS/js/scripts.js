$(document).ready(function() {

    // progress bar
    let containerA = document.getElementById("circleA");

    let circleA =  new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        strokewidth: 8,
        duration: 1400,
        fromt: { color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() * 60);

            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

   
    let circleB =  new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokewidth: 8,
        duration: 1600,
        fromt: { color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() * 254);

            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC =  new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokewidth: 8,
        duration: 2000,
        fromt: { color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() * 32);

            circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let circleD =  new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokewidth: 8,
        duration: 2200,
        fromt: { color: '#AAA' },
        to: {color: '#65DAF9'},

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() * 5243);

            circle.setText(value);

        }

    });
    
    // iniciando o loader quanto o usuario chega no elemento
    let dataAreOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {     
    
    let scroll = $(window).scrollTop();

    if(scroll > (dataAreOffset.top -500) && stop == 0) {
        
        circleA.animmate(1.0);
        circleB.animmate(1.0);
        circleC.animmate(1.0);
        circleD.animmate(1.0);

        stop = 1;

    }
    
    });  

    // Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});


    }, 250);

    // Filto do portfólio
    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes)
        } else if(type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if(type == 'seo-btn') {
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');    
                } else {
                    $(this).fadeIn();
                }
            });
        }

    }

    // scroll para seções
     let navBtn =  $('.nav-item');

     let bannerSection = $('#mainSlider');
     let aboutSection = $('#about-area');
     let servicesSection = $('#service-area');
     let teamSection = $('#team-area');
     let portfólioSection = $('#portfólio-area');
     let contactSection = $('#contact-area');

     let scrollTo = '';

     $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
          scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfólio-area') {
            scrollTo = portfólioSection;
        } else if(btnId == 'contact-area') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }
        
        $([document.documentElement, document.body]).animate({
           scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

     });

});