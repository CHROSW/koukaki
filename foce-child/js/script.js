jQuery(document).ready(function($) {
  $(document).ready(function(){
    /* story section */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animStoryH2 = document.querySelector('.story h2');
        const animStoryArticle = document.querySelector('.story__article'); 
        if (entry.isIntersecting) {
          animStoryH2.classList.add('story-transition');
          animStoryArticle.classList.add('story-transition-article'); 
        return; // if we added the class, exit the function
        }
  
        // We're not intersecting, so remove the class!
        animStoryH2.classList.remove('story-transition');
        animStoryArticle.classList.remove('story-transition-article');
      });
    });
  
    observer.observe(document.querySelector('.story p'));

    /* characters section */
    const obscharacters = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animcharacters = document.querySelector('#characters');
        if (entry.isIntersecting) {
          animcharacters.classList.add('characters-transition');
        return; // if we added the class, exit the function
        }
  
        // We're not intersecting, so remove the class!
        animcharacters.classList.remove('characters-transition');
      });
    });

    obscharacters.observe(document.querySelector('#characters'));

    /* place section */
    const obsplace = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const animplace = document.querySelector('#place');
        if (entry.isIntersecting) {
        animplace.classList.add('place-transition');
        return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animplace.classList.remove('place-transition');
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
          animStudioText.classList.add('studio-transition-text'); 
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animStudioH2.classList.remove('studio-transition');
        animStudioText.classList.remove('studio-transition-text');
      });
  });

    obstudio.observe(document.querySelector('#studio div'));

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
    let contentTitleStudio = addSpanTitleStudio.textContent;
    addSpanTitleStudio.textContent = "";
    let spanStudio= document.createElement('div');
    addSpanTitleStudio.appendChild(spanStudio).innerHTML = contentTitleStudio;
    /* video */
    let bannerVideo = document.querySelector('.banner');
    let videoTag= document.createElement('video');
    bannerVideo.append(videoTag);
    videoTag.setAttribute('src', 'wp-content/themes/foce-child/video/StudioKoukakivideoheadersansson.mp4');
    videoTag.setAttribute('type',"video/mp4");
    videoTag.muted = true;
    videoTag.autoplay = true;
    videoTag.loop = true;
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
    
  
  });
    
    
});