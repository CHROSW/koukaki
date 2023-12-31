jQuery(document).ready(function($) {
  $(document).ready(function(){

    

    /* story section */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animStoryH2 = document.querySelector('.story h2');
        const animStoryArticle = document.querySelector('.story__article'); 
        if (entry.isIntersecting) {
          animStoryArticle.classList.remove('story-animation-flower-super-speed');
          animStoryH2.classList.add('story-animation');
          animStoryH2.classList.add('story-transition');
          animStoryArticle.classList.add('story-animation-article');
          observer.unobserve(document.querySelector('.story p'));
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
          obscharacters.unobserve(document.querySelector('#characters'));
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
        animplaceBigCloud.classList.add('place-animation-cloud');
        animplaceLittleCloud.classList.add('place-animation-cloud');
        obsplace.unobserve(document.querySelector('#place div p'));
        return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animplace.classList.remove('place-transition');
        animplaceBigCloud.classList.remove('place-animation-cloud');
        animplaceLittleCloud.classList.remove('place-animation-cloud');
      });
    });
    var optionsSectionPlace = {
      root: document.querySelector("#place div p"),
      rootMargin: "140px",
      threshold: 1.0,
    };
    obsplace.observe(document.querySelector('#place div p'), optionsSectionPlace);

    /* studio section */
    const obstudio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animStudioH2 = document.querySelector('#studio h2');
        const animStudioText = document.querySelector('#studio h2 + div'); 
        if (entry.isIntersecting) {
          animStudioH2.classList.add('studio-transition');
          animStudioH2.classList.add('studio-animation');
          animStudioText.classList.add('studio-animation-text');
          obstudio.unobserve(document.querySelector('#studio div p')); 
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animStudioH2.classList.remove('studio-transition');
        animStudioH2.classList.remove('studio-animation');
        animStudioText.classList.remove('studio-animation-text');
      });
    });
    var optionsSectionStudio = {
      root: document.querySelector("#studio div p"),
      rootMargin: "140px",
      threshold: 1.0,
    };
    obstudio.observe(document.querySelector('#studio div p'), optionsSectionStudio);

    /* footer section */
    const obsfooter = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animfooter = document.querySelector('#colophon');
        const animFooterFlower = document.querySelector('#colophon ul'); 
        if (entry.isIntersecting) {
          animfooter.classList.add('footer-animation');
          animFooterFlower.classList.add('footer-animation-flower'); 
          obsfooter.unobserve(document.querySelector('#colophon ul'));
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animfooter.classList.remove('footer-animation');
        animFooterFlower.classList.remove('footer-animation-flower');
      });
    });
    var optionsSectionFooter = {
      root: document.querySelector("#colophon ul"),
      rootMargin: "140px",
      threshold: 1.0,
    };
    obsfooter.observe(document.querySelector('#colophon ul'), optionsSectionFooter);

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
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    
    /* parallalax title-video */
    var setSkrollr = function($el, data) {
      for (var i = 0, l = data.length; i < l; i++) {
          var d = data[i],
              px = d[0];
              css = d[1];
          $el.attr('data-' + px, css);
      }
    }
   
    jQuery(function($) {
      setSkrollr($('.banner img'), [[0, 'transform:translateY(0%)'], [750, 'transform:translateY(-100%)'], [1500, 'transform:translateY(100%)']]);
      skrollr.init({
          smoothScrolling: false
      });
    });
   
  

    /* super speed rotating flower */
    let state;
    window.addEventListener("scroll", function (e) {
      const animStoryH2 = document.querySelector('.story h2');
      const animStoryArticle = document.querySelector('.story__article');
      const animStudioH2 = document.querySelector('#studio h2');
      const animfooter = document.querySelector('#colophon');
      const animFooterFlower = document.querySelector('#colophon ul');
      if(state !== null){
        clearTimeout(state);
        animStoryH2.classList.add('animation-flower-super-speed');
        animStoryArticle.classList.add('animation-flower-super-speed');
        animStudioH2.classList.add('animation-flower-super-speed');
        animfooter.classList.add('animation-flower-super-speed');
        animFooterFlower.classList.add('animation-flower-super-speed');
        }
        state =  setTimeout(function() {
          animStoryH2.classList.remove('animation-flower-super-speed');
          animStudioH2.classList.remove('animation-flower-super-speed');
          animStoryArticle.classList.remove('animation-flower-super-speed');
          animStoryArticle.classList.remove('story-animation-article');
          animStoryArticle.classList.add('story-animation-flower');
          animfooter.classList.remove('animation-flower-super-speed');
          animFooterFlower.classList.remove('animation-flower-super-speed');
        }, 300);
    }, false);
    /* close buger menu with link */
    const navMenu= document.querySelector('.main-navigation');
    const linkMenu = document.querySelectorAll('.nav-menu li a');
      for(i=0 ; i < linkMenu.length ; i++){
        linkMenu[i].addEventListener("click", function(){
          navMenu.classList.remove('toggled');
        });
      }

  });  
    
});