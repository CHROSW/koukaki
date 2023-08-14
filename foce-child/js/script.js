jQuery(document).ready(function($) {
  $(document).ready(function(){
    /* story section */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const animStoryH2 = document.querySelector('#story.story h2');
      const animStoryArticle = document.querySelector('#story.story .story__article'); 
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
  
  observer.observe(document.querySelector('#story.story p'));

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





  });
  });