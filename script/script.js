;(function($){

  let cnt = 0;
  // 헤더영역 스크립트 - 네비게이션(메인메뉴 & 서브메뉴)
  // $('.main-btn').on({
  //   mouseenter: function(){
  //     $('.sub').fadeOut(0);
  //     $(this).next().fadeIn(300);
  //     
  //     $('.main-btn').removeClass('on');
  //     $(this).addClass('on');
  //   }
  // });
// 
  // $('#nav').on({
  //   mouseleave: function(){
  //     $('.main-btn').removeClass('on');
  //     $('.sub').fadeOut(300);
  //   }
  // });


  // 메인슬라이드 스크립트 아랫쪽에서 윗쪽으로 이동 애니메이션  top: -300*cnt
  // 순서(Order)
  // 1. 메인슬라이드 함수
  function mainSlide(){
   
    $('.slide-wrap').animate({top: -300*cnt }, 600, function(){
        if(cnt===3){
          cnt=0;
          $('.slide-wrap').animate({top: -300*cnt }, 0);
        }
    });

  }

  // 2. 다음카운트 함수
  // cnt++ 1씩증가
  // cnt-- 1씩감소
  cnt=0;
  function nextCount(){
    cnt++;
    mainSlide();
  }

  // 3. 자동타이머 함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();



  // 섹션2
  // 공지사항, 갤러리
  // 갤러리버튼 클릭 이벤트 : 클래스를 추가 addClass('on')
  // $('.gallery-btn').on({
  //   click: function(){
  //     $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').addClass('on');
  //   }
  // })
// 
  // // 공지사항버튼 클릭 이벤트 : 추가된 클래스 모두 삭제 removeCalss('on')
  // $('.notice-btn').on({
  //   click: function(){
  //     $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').removeClass('on');
  //   }
  // })



  // 모달창 이벤트
  // 모달창 열기
  // $('.modal-btn').on({
  //   click:  function(){
  //     $('#modal').fadeIn(300);
  //     // $('#modal').show();
  //   }
  // })
// 
  // // 모달창 닫기
  // $('.modal-close').on({
  //   click:  function(){
  //     $('#modal').fadeOut(300);
  //     // $('#modal').hide();
  //   }
  // })


  
})(jQuery);