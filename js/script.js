/*
Theme Name: 국경없는 의사회
Author: css3studio
Version:1.0
*/

var $ = jQuery.noConflict();

var device_status = "";
var dw = 0;

$(window).resize(function() {
	dw = viewport().width;
	if(dw <= 1023 && device_status == "pc"){	//PC에서 모바일로 변경시
		$("body").removeClass('pc');
		$("body").addClass('mobile');
		init_mobile();
		device_status = "mobile";
	}else if(dw > 1023 && device_status == "mobile"){	//모바일에서 PC로 변경시
		$("body").removeClass('mobile');
		$("body").addClass('pc');
		init_pc();
		device_status = "pc";
	}
});

$(window).scroll(function(event){
});

$(document).ready(function() {

    //Animate On Scroll Library
    window.setTimeout(function(){
        AOS.init({
        once: true,
        offset: 0,
        duration: 1500,
        delay: 0,
        anchorPlacement: 'top-center'
        });
    },100);

    $('html').removeClass('no-js');

    dw = viewport().width;
    if(dw <= 1023){	//모바일
        $("body").removeClass('pc');
        $("body").addClass('mobile');
        init_mobile();
        device_status = "mobile";
    }else{	//PC
        $("body").removeClass('mobile');
        $("body").addClass('pc');
        init_pc();
        device_status = "pc";
    }

      /* 포스트뷰 > 추천칼럼 */
    $('.slider01 > ul').slick({
        enterMode: true,
        infinite: true,
        arrows: true,
        dots:true,
        slidesToShow: 1,

    });


    //이미지 가로-세로 비율 - jquery
    $('img').each(function() {
        var img = new Image();
        img.src = $(this).attr('src');
        var this_img = $(this);
        img.onload = function() {
            var fillClass = (img.height > img.width)
                    ? 'fillheight' : 'fillwidth';
            this_img.addClass(fillClass);
        };
    });


});

/* 메인 > 모달 오픈 */
function open_modal(class_name) {
  $('.' + class_name).fadeIn();
  return false;
}
function close_modal() {
  $('.modal').fadeOut();
  return false;
}

//PC버젼 초기화
function init_pc(){

}
//모바일 버젼 초기화
function init_mobile(){



}


function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

