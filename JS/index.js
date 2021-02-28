if($(window).width() >= 1025){
    $('#header-shopping').on({
        mouseenter: function () {
            $('#shopping-alert').removeClass('shrinkDown');
            $('#shopping-alert').addClass('growUp');
        },
        mouseleave: function () {
            $('#shopping-alert').removeClass('growUp');
            $('#shopping-alert').addClass('shrinkDown');
        }
    });

    $('#header-alert').on({
        mouseenter: function () {
            $('#login-alert').removeClass('shrinkDown');
            $('#login-alert').addClass('growUp');
        },
        mouseleave: function () {
            $('#login-alert').removeClass('growUp');
            $('#login-alert').addClass('shrinkDown');
        }
    });
}


if (localStorage.getItem("total_seconds")) {
    var total_seconds = localStorage.getItem("total_seconds");
} else {
    var total_seconds = 100 * 10;
}
var minutes = parseInt(total_seconds / 60);
var seconds = parseInt(total_seconds % 60);
function countDownTimer() {
    if (seconds < 10) {
        seconds = "0" + seconds;
    } if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    if (total_seconds <= 0) {
        setTimeout("document.quiz.submit()", 1);
    } else {
        total_seconds = total_seconds - 1;
        minutes = parseInt(total_seconds / 60);
        seconds = parseInt(total_seconds % 60);
        localStorage.setItem("total_seconds", total_seconds)
        setTimeout("countDownTimer()", 1000);
    }
}
setTimeout("countDownTimer()", 1000);

$(document).ready(function () {
    if($(window).width() >= 1025){
        $('.lazy').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 10,
            slidesToScroll: 5,
            rows: 2,
            infinite: false,
            draggable: false,
            focusOnSelect: false,
            prevArrow: "<i class='slick-prev-icon fas fa-chevron-left fa-2x'></i>",
            nextArrow: "<i class='slick-next-icon fas fa-chevron-right fa-2x'></i>",
        });
    }
    else if($(window).width() <= 1024 && $(window).width() >= 740){
        $('.lazy').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 6,
            slidesToScroll: 2,
            rows: 2,
            infinite: false,
            draggable: false,
            focusOnSelect: false,
            prevArrow: "<i class='slick-prev-icon fas fa-chevron-left fa-2x'></i>",
            nextArrow: "<i class='slick-next-icon fas fa-chevron-right fa-2x'></i>",
            dots: false
        });
    }
    else{
        $('.lazy').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3.5,
            slidesToScroll: 2,
            rows: 1,
            infinite: false,
            draggable: true,
            focusOnSelect: false,
            dots: true,
        });

        $('.lazy1').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3.5,
            slidesToScroll: 2,
            rows: 1,
            infinite: false,
            draggable: false,
            focusOnSelect: false,
        });
    }
});

var onTop = document.getElementById('top');
console.log(onTop);
window.addEventListener('scroll', function () {
    if (window.scrollY !== 0) {
        onTop.style.cssText = 'display: block; position: fixed';
    }
    else {
        onTop.style.cssText = 'display: none;';
    }
});

onTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

$(document).ready(function () {
    $('.lazy1').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 2,
        rows: 2,
        infinite: false,
        draggable: false,
        focusOnSelect: false,
        prevArrow: "<i class='slick-prev-icon fas fa-chevron-left fa-2x'></i>",
        nextArrow: "<i class='slick-next-icon fas fa-chevron-right fa-2x'></i>",
    });
});
