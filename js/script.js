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

//5.4

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
 

function generateTitleLinks(){

  /* remove contents of titleList */
  
  const titleList = document.querySelectorAll(optTitleListSelector);
  function clearMessages(){
	document.getElementById(optTitleListSelector).innerHTML = '';
}
  /* find all the articles and save them to variable: articles */
  const optArticleSelector = articles;
	document.getElementyById(optArticleSelector);

  let html = '';
  
  /* for each article */
	
  for(let article of articles){
    document.getElementById(optTitleListSelector).innerHTML;
}

    /* get the article id */
	const articleId = article.getElementById(optArticleSelector);

    /* find the title element */
	const titleId = document.getElementById(optTitleSelector)
	titleId = article.getElementById('.post .active');
	
    /* get the title from the title element */
	const y = x.getElementsByTagName("p");

    /* create HTML of the link */
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
	console.log('show');
	
    /* insert link into titleList */
    html = html + linkHTML;
  
  titleList.innerHTML = html;
}

generateTitleLinks();
