
// 스크롤할 때 뱃지 없어지기
const badgeEl =document.querySelector('.badges');
const toTopEl=document.querySelector('#to-top');


window.addEventListener('scroll',_.throttle(function(){
if (window.scrollY>500) {
// //배지숨기기
//   gsap.to(요소,지속시간,옵션)
gsap.to(badgeEl,.6,{
  opacity: 0,
  display:'none'
});
gsap.to(toTopEl,.2,{
  x:0
  
  });  
  // badgeEl.style.display='none';
} else{
  gsap.to(badgeEl,.6,{
    opacity: 1,
    display:'block'
  });
  // badgeEl.style.display='block';
  gsap.to(toTopEl,.2,{
  x:100
  });
  toTopEl.addEventListener('click',function() {
    gsap.to(window,.7,{
      scrollTo:0,
    });
  });
}
},300));
// _.throttle(함수,시간)



const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1 , {
    delay:(index+1)*.7 ,
    opacity:1
  });

})

//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper',
{
direction:'vertical',
autoplay:true,
loop:true

});

new Swiper('.promotion .swiper',{
  slidesPerView:3,//한번에 보여줄 슬라이드 개수
  spaceBetween:3,//슬라이드 사이 여백
  centeredSlides: true,//1번슬라이드가 가운데 보이기 
  autoplay: {
    delay:3000
  },
  loop:true,
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true //사용자의 페이지 번호 요소 제어 가능
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
new Swiper('.awards .swiper',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  pagination:{
    el: '.awards .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true //사용자의 페이지 번호 요소 제어 가능
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const promotionToggleBtn =document.querySelector('.toggle-promotion');
const promotionEl = document.querySelector('.promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
    promotionToggleBtn.classList.add('rotate');
  } else{
    //보임 처리
    promotionEl.classList.remove('hide');
    promotionToggleBtn.classList.remove('rotate');
  }

});

function random(min,max){
  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}
function floatingObject(selector,delay,size){
  gsap.to(
    selector,
     random(1.5,2.5),
      {
        y:size,
        repeat:-1,
        yoyo:true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
      }
  );
}
floatingObject('.float1',1,15);
floatingObject('.float2',.5,15);
floatingObject('.float3',1.5,20);

const spyEls =document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  console.log(spyEl);
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook:.8


    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
    

});


// const menuItems = document.querySelectorAll('.item');
// menuItems.forEach(function(menuItem){
//   let menuEl =menuItem.querySelector('.item__contents')
//   let menuName = menuItem.querySelector('.item__name')
//   console.log(menuName)
//   console.log(menuEl)
//   menuName.addEventListener('mouseover',function(){
    
//     gsap.to(menuEl,2,{
//       height:100,
//       display:'block',
//       opacity:1
//     });
//   });

// }); 혼자 실습