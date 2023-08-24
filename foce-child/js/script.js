jQuery(document).ready(function($) {
  $(document).ready(function(){

    

    /* story section */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animStoryH2 = document.querySelector('.story h2');
        const animStoryArticle = document.querySelector('.story__article'); 
        if (entry.isIntersecting) {
          animStoryH2.classList.add('story-animation');
          animStoryH2.classList.add('story-transition');
          animStoryArticle.classList.add('story-animation-article');
        return; // if we added the class, exit the function
        }
  
        // We're not intersecting, so remove the class!
        animStoryH2.classList.remove('story-animation');
        animStoryH2.classList.remove('story-transition');
        animStoryArticle.classList.remove('story-animation-article');
      });
    });
    var optionsSectionStory = {
      root: document.querySelector(".story p"),
      rootMargin: "140px",
      threshold: 1.0,
    };
    observer.observe(document.querySelector('.story p'), optionsSectionStory);

    /* characters section */
    const obscharacters = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animcharacters = document.querySelector('#characters');
        if (entry.isIntersecting) {
          animcharacters.classList.add('characters-transition');
          animcharacters.classList.add('characters-animation');
        return; // if we added the class, exit the function
        }
  
        // We're not intersecting, so remove the class!
        animcharacters.classList.remove('characters-transition');
        animcharacters.classList.remove('characters-animation');
      });
    });
    var optionsSectionCharacters = {
      root: document.querySelector("#characters"),
      rootMargin: "140px",
      threshold: 1.0,
    };
    obscharacters.observe(document.querySelector('#characters'),  optionsSectionCharacters);

    /* place section */
    const obsplace = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animplace = document.querySelector('#place');
        const animplaceBigCloud = document.querySelector('#place div .big-cloud');
        const animplaceLittleCloud = document.querySelector('#place div .little-cloud');
        if (entry.isIntersecting) {
        animplace.classList.add('place-transition');
        animplaceBigCloud.classList.add('place-transition-cloud');
        animplaceLittleCloud.classList.add('place-transition-cloud');
        return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animplace.classList.remove('place-transition');
        animplaceBigCloud.classList.remove('place-transition-cloud');
        animplaceLittleCloud.classList.remove('place-transition-cloud');
      });
    });

    obsplace.observe(document.querySelector('#place div p'));

    /* studio section */
    const obstudio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animStudioH2 = document.querySelector('#studio h2');
        const animStudioText = document.querySelector('#studio div'); 
        if (entry.isIntersecting) {
          animStudioH2.classList.add('studio-transition');
          animStudioH2.classList.add('studio-animation');
          animStudioText.classList.add('studio-animation-text'); 
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animStudioH2.classList.remove('studio-transition');
        animStudioH2.classList.remove('studio-animation');
        animStudioText.classList.remove('studio-animation-text');
      });
  });
  var optionsSectionStudio = {
    root: document.querySelector("#studio div"),
    rootMargin: "140px",
    threshold: 1.0,
  };
    obstudio.observe(document.querySelector('#studio div'), optionsSectionStudio);

    /* footer section */
    const obsfooter = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animfooter = document.querySelector('#colophon');
        const animFooterFlower = document.querySelector('#colophon ul'); 
        if (entry.isIntersecting) {
          animfooter.classList.add('footer-transition');
          animFooterFlower.classList.add('footer-transition-flower'); 
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animfooter.classList.remove('footer-transition');
        animFooterFlower.classList.remove('footer-transition-flower');
      });
    });

    obsfooter.observe(document.querySelector('#colophon ul'));

    /* title story to animate */
    let addSpanTitleStory = document.querySelector('.story h2');
    let contentTitleStory = addSpanTitleStory.textContent;
    addSpanTitleStory.textContent = "";
    let spanStory= document.createElement('div');
    addSpanTitleStory.appendChild(spanStory).innerHTML = contentTitleStory;
    /* title characters to animate */
    let addSpanTitleCharacter = document.querySelector('.main-character h3');
    let contentTitleCharacter = addSpanTitleCharacter.textContent;
    addSpanTitleCharacter.textContent = "";
    let spanCharacter= document.createElement('div');
    addSpanTitleCharacter.appendChild(spanCharacter).innerHTML = contentTitleCharacter;
    /* title place to animate */
    let addSpanTitlePlace = document.querySelector('#place h3');
    let contentTitlePlace = addSpanTitlePlace.textContent;
    addSpanTitlePlace.textContent = "";
    let spanPlace= document.createElement('div');
    addSpanTitlePlace.appendChild(spanPlace).innerHTML = contentTitlePlace;
    /* title studio to animate */
    let addSpanTitleStudio = document.querySelector('#studio h2');
    addSpanTitleStudio.textContent = "";
    let spanStudioLeft= document.createElement('div');
    spanStudioLeft.classList.add("title-left");
    let spanStudioRight= document.createElement('div');
    spanStudioRight.classList.add("title-right");
    addSpanTitleStudio.appendChild(spanStudioLeft).innerHTML = "Studio&nbsp";
    addSpanTitleStudio.appendChild(spanStudioRight).innerHTML = "Koukaki";
    /* video */
    function showVideo(){
      if(document.body.clientWidth > 699){
        let videoTagScreen= document.querySelector('video');
        if(videoTagScreen === null){
          let bannerVideo = document.querySelector('.banner');
          let videoTag= document.createElement('video');
          bannerVideo.append(videoTag);
          videoTag.setAttribute('src', 'wp-content/themes/foce-child/video/StudioKoukakivideoheadersansson.mp4');
          videoTag.setAttribute('type',"video/mp4");
          videoTag.muted = true;
          videoTag.autoplay = true;
          videoTag.loop = true;
        }
      }else{
        let videoTagScreen= document.querySelector('video');
        if(videoTagScreen !== null){
          videoTagScreen.remove();
        }
      }
    }
    window.onresize = showVideo;
    if(document.body.clientWidth > 699){
      showVideo();
    }
    /* swipper coverflow */
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: 4,
      spaceBetween: 1,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 1000,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    
    /* burger menu */
    const imgMenu = document.querySelector('button.menu-toggle');
    const navMenu= document.querySelector('.main-navigation');
    imgMenu.addEventListener('click', function(){
      if(imgMenu.innerHTML !== "<span><strong>X</strong></span>"){
        imgMenu.innerHTML='';
        imgMenu.innerHTML="<span><strong>X</strong></span>";
      }else{
        imgMenu.innerHTML="<span class='line'></span><span class='line'></span><span class='line'></span>";
      }

      const linkMenu = document.querySelectorAll('.nav-menu li a');
      for(i=0 ; i < linkMenu.length ; i++){
        linkMenu[i].addEventListener("click", function(){
          navMenu.classList.remove('toggled');
          imgMenu.innerHTML="<span class='line'></span><span class='line'></span><span class='line'></span>";
        });
      }  
    });
    /* parallalax title-video */
    var s = skrollr.init();
    parallalaxTitle=document.querySelector('.banner img');
    parallalaxTitle.setAttribute('data-bottom-top', 'transform:translate3d(0, 0px, 0)');
    parallalaxTitle.setAttribute('data-top-bottom', 'transform:translate3d(0, -200px, 0)');
  });
    
    
});