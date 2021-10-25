
let MenuBtn = document.querySelector('.open-icon');
let CloseBtn = document.querySelector('.close-icon');

MenuBtn.addEventListener('click', function(){
    document.querySelector('.sidebar').classList.add('active');
})

CloseBtn.addEventListener('click', function(){
    document.querySelector('.sidebar').classList.remove('active');
})

//Slider Banneer
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let slides = document.querySelectorAll('.slide-imgae');
let slideIcons = document.querySelectorAll('.dots');
let numberOfSlides = slides.length;
var slideNumber = 0;    //slideNumber


function remove(){
    slides.forEach((slide) => { slide.classList.remove('active');   });
    slideIcons.forEach((icon) => {  icon.classList.remove('active');  });
}
  
function add(){
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
}

nextBtn.addEventListener('click', function(){
     remove();
    slideNumber++;

    if(slideNumber > (numberOfSlides -1)){
        slideNumber = 0;
    }
    add();
 })



prevBtn.addEventListener('click', function(){
        remove();
        slideNumber--;
        if(slideNumber < 0){
            slideNumber = numberOfSlides -1;
        }
       add();
})


var autoSlider = setInterval(function(){        
        remove();
        slideNumber++;
        if(slideNumber > (numberOfSlides -1)){
            slideNumber = 0;}
        add();

 },4900);


//dots functions start
var ManualNav = function(dot){
    remove();
    slides[dot].classList.add('active');
    slideIcons[dot].classList.add('active');
}
slideIcons.forEach((btn, i) =>{
    btn.addEventListener('click', function(){
        ManualNav(i);
        slideNumber =i;
    })
})





var swiper = new Swiper(".myTry", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,   
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when window width is >= 786px  
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    },
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".nxt-button-product",
      prevEl: ".prev-button-product",
    },
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  });

  //Scroll show up 
  let showUpButton = document.querySelector('.up');
  window.onscroll = function(){
    if(this.scrollY >= 200){
      showUpButton.classList.add("show");
    }
      else{
        showUpButton.classList.remove('show');

      }
    }
  showUpButton.onclick = function(){
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  }

  //Count number section
  let yearsExperience = document.getElementById('count1');
  let happyCustomers = document.getElementById('count2');
  let workingDay = document.getElementById('count3');

function Counter(ele, start, end, duration){
  var current = start;
  let increment = 0;
  if(start < end){
    increment +=1;
  }else{
    increment -=1;
  }


  let timerCounter = setInterval(() => {
    current = current + increment;
    ele.textContent = current;
    if(current == end){
      clearInterval(timerCounter);
    }
  }, duration);

}


Counter(yearsExperience, 1, 100, 50);
Counter(happyCustomers, 1, 800, 0.00001);
Counter(workingDay, 1, 7, 100);





