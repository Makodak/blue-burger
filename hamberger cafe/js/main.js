'use strict'

$(function () {
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 300,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });
});


{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');
  const navItems = document.querySelectorAll('.nav-item');
  const carousel = document.getElementById('carousel');
  const slides = carousel.children;
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const dots = [];
  const triggerBottom = (window.innerHeight / 5) * 4;





  let currentSlide = 0;
  const slideWidth = slides[0].clientWidth;


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');


  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });

  });

  window.addEventListener('load', () => {
    const boxes = document.querySelectorAll('.box');
    window.addEventListener('scroll', showBoxes);
    showBoxes();
    function showBoxes() {
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    }
  });

  window.addEventListener('load', () => {
    const appears = document.querySelectorAll('.appear');
    window.addEventListener('scroll', showAppears);
    showAppears();
    function showAppears() {
      appears.forEach((appear) => {
        const appearTop = appear.getBoundingClientRect().top;
        if(appearTop < triggerBottom) {
          appear.classList.add('show');
        } else {
          appear.classList.remove('show');
        }
      });
      
    }
  });

  // function moveSlide() {
  //   carousel.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  //   carousel.animate([{opacity: '0'}, {opacity: '1'}], 700)


  // }

  // moveSlide();

  // function lastSlide() {
  //   carousel.style.transform = `translateX(-${slideWidth * (slides.length - 1)}px)`;
  // }

  // function setupDots() {
  //   for (let i = 0; i < slides.length; i++) {
  //     const button = document.createElement('button');
  //     button.addEventListener('click', () => {
  //       currentSlide = i;
  //       updateDots();
  //       moveSlide();
  //     })
  //     dots.push(button);
  //     document.querySelector('.slider').appendChild(button);
  //   }

  //   dots[0].classList.add('current');
  // }

  // setupDots();


  // function updateDots() {
  //   dots.forEach(dot => {
  //     dot.classList.remove('current')
  //   });
  //   dots[currentSlide].classList.add('current')
  // }



  // next.addEventListener('click', () => {
  //   currentSlide++;
  //   if (currentSlide >= slides.length) {
  //     currentSlide = 0
  //   };
  //   moveSlide();
  //   updateDots();

  // });

  // prev.addEventListener('click',() => {
  //  currentSlide--;
  //  if (currentSlide < 0) {
  //    currentSlide = slides.length - 1;
  //  };

  //  moveSlide();
  //  updateDots();

  // });








};