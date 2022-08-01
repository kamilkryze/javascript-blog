'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log('show', event)
  console.log('clickedElement (with plus): ' + clickedElement);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = href;
  console.log('show', articleSelector);
  clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector('.titles href');
  console.log('show', targetArticle);
/* ERROR - script.js:30 Uncaught ReferenceError: href is not defined
at HTMLAnchorElement.titleClickHandler (script.js:30:27) */
  

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('clickedElement:', targetArticle);
  
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
