jQuery(document).ready(function($) {
  $(document).ready(function(){
    
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
  
  });
  });