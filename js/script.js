"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");
  console.log("show", event);
  console.log("clickedElement (with plus): " + clickedElement);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add("active");
  console.log("clickedElement:", clickedElement);

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".post");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add("active");
  console.log("clickedElement:", targetArticle);
}

//5.4

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";
const optArticleTagsSelector = ".post-tags .list";

function generateTitleLinks(customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = "";

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = "";

  /* for each article */
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute("id");

    /* find the title element */
    const title = article.querySelector(".post-title").innerHTML;

    const linkHTML =
      '<li><a href="#' + articleId + '"><span>' + title + "</span></a></li>";
    html = html + linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll(".titles a");

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

generateTitleLinks();

// 6.2

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagWrapper = article.querySelector("optArticleTagsSelector");

    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */   
    for(let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML =
      '<li><a href="#tag-' + tag + '"><span>' + tag+ "</span></a></li>";
    /* add generated code to html variable */
    html = html + linkHTML;
    
    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */
    tagTitle.innerHTML = html;
    /* END LOOP: for every article: */
  }
}


generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
   const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
clickedElement.classList.add("active");
console.log("clickedElement:", clickedElement);

  /* START LOOP: for each active tag link */
  for (let tag of activeArticleTags) {
    /* remove class active */
    activeTag.classList.remove("active");

  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */
  for(let link of links){
    /* add class active */
    clickedElement.classList.add("active");
    console.log("clickedElement:", clickedElement);
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.tags href') 
    
  
  /* START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener("click", tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

// Ex. Author links

optArticleAuthorSelector = article.querySelectorAll('.post-author')
function generateAuthors() {
  /* find all articles */
  const authors = document.querySelectorAll(optArticleAuthorSelector);

  /* START LOOP: for every article: */
  for (let author of authors) {
    /* find tags wrapper */
    const authorWrapper = article.querySelector("optArticleTagsSelector");

    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */
   // const articleAuthors = article.getAttribute("");
  
    /* START LOOP: for each tag */   
    for(let author of authors) {
      /* generate HTML of the link */
      const linkHTML =
      '<li><a "href=" '+ author +' "></a></li>"';
    /* add generated code to html variable */
    html = html + linkHTML;
    
    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */
    articleAuthor.innerHTML = html;
    /* END LOOP: for every article: */
  }
}
generateAuthors();

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
   const href = clickedElement.getElementsByName('author-name');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace('#tag-', '');
  /* find all tag links with class active */
const activeAuthorLinks = document.querySelectorAll('.authors href');
clickedElement.classList.add("active");
console.log("clickedElement:", clickedElement);

  /* START LOOP: for each active tag link */
  for (let author of activeAuthorLinks) {
    /* remove class active */
    activeAuthor.classList.remove("active");

  /* END LOOP: for each active tag link */
}
  /* find all tag links with "href" attribute equal to the "href" constant */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + author + '"]');
}

function addClickListenersToAuthors(){
  /* find all links to tags */
  const author = document.querySelectorAll('author-name') 
    
  
  /* START LOOP: for each link */
  for (let author of authors) {
    /* add tagClickHandler as event listener for that link */
    author.addEventListener("click", authorClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();
