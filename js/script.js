"use strict";

const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
  authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML)
  tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML)
}

const opts = {
  tagSizes: {
    count: 5,
    classPrefix: "tag-size-",
  },
};

const select = {
  all: {
    articles: ".post",
    linksTo: {
      tags: 'a[href^="#tag-"]',
      authors: 'a[href^="#author-"]',
    },
  },
  article: {
    tags: ".post-tags .list",
    author: ".post-author",
  },
  listOf: {
    titles: ".titles",
    tags: ".tags.list",
    authors: ".authors.list",
  },
};

const optTagsListSelector = ".tags.list";
const optCloudClassCount = "5";
const optCloudClassPrefix = "tag-size-";
const optAuthorsListSelector = ".authors.list";

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

function generateTitleLinks(customSelector = "") {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = "";

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );

  let html = "";

  /* for each article */
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute("id");

    /* find the title element */
    const title = article.querySelector(".post-title").innerHTML;

    const linkHTMLData = {id: articleId, title: articleTitle};
const linkHTML = templates.articleLink(linkHTMLData);

      
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
    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    /* split tags into array */
    const articleTagsArray = articleTags.split(" ");
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTMLData = {id: articleTags, title: articleTags};
      const linkHTML = templates.articleLink(linkHTMLData);

      /* add generated code to html variable */
      html = html + linkHTML;

      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute("href");
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace("#tag-", "");

  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (let tag of tagLinks) {
    /* remove class active */
    tag.classList.remove("active");
    /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const relatedLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for (let link of relatedLinks) {
    /* add class active */
    link.classList.add("active");
    /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const links = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener("click", tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

// Ex. Author links

const optArticleAuthorSelector = ".post-author";

function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    /* get author from data-author attribute */
    const author = article.getAttribute("data-author");

    /* generate HTML of the link */
    const linkHTMLData = {id: author, title: author};
    const linkHTML = templates.articleLink(linkHTMLData);


    authorWrapper.innerHTML = linkHTML;
    /* END LOOP: for each tag */
  }
}

// 6.3 wyświetlenie listy autorów
const optAuthorsListSelector = ".authors.list";
generateAuthors();
{
  /* find all authors */
  const authors = document.querySelectorAll(optAuthorsListSelector);
  /* START LOOP: for every article: */
  for (let author of authors) {
    /* find tags wrapper */
    const authorWrapper = article.querySelector(optAuthorsListSelector);
    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */
    const articleAuthors = article.getAttribute("data-author");
    /* START LOOP: for each tag */
    for (let author of articleAuthorsArray) {
      /* generate HTML of the link */
      const authorLinkHTML =
        '<li><a class="calculateTagClass" href="#tag-' +
        author +
        '"><span>' +
        author +
        "</span></a></li>";

      /* add generated code to html variable */
      html = html + authorLinkHTML;
      /* END LOOP: for each tag */
    }
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const authorList = document.querySelector(optAuthorsListSelector);

  /* [NEW] create variable for all links HTML code */
  let allAuthorsHTML = "";
}

function authorClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute("href");

  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace("#author-", ""); //#atuhor-Marion Berry -> Marion Berry

  /* find all authors links with class active */
  const activeAuthorLinks = document.querySelectorAll(
    'a.active[href^="#author-"]'
  );
  for (let activeAuthor of activeAuthorLinks) {
    activeAuthor.classList.remove("active");
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  document.querySelectorAll('a[href^="' + href + '"]');

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors() {
  /* find all links to tags */
  const authors = document.querySelectorAll('a[href^="#author-"]');

  /* START LOOP: for each link */
  for (let author of authors) {
    /* add tagClickHandler as event listener for that link */
    author.addEventListener("click", authorClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();

// 6.3

function calculateTagsParams(tags) {
  return { min: 2, max: 10 };
  // DOKOŃCZYĆ od "Znalezienie skrajnych liczb wystąpień" do końca
}

function calculateTagClass(count, params) {
  const params = {
    min: 999999,
    max: 0
  }
  
  for(const tag in tags) {
    if (tags[tag] < params.min) {
      params.min = tags[tag];
    }
    if (tags[tag] > params.max) {
      params.max = tags[tag];
    }
  }

  return params;
}

function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    /* split tags into array */
    const articleTagsArray = articleTags.split(" ");
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const tagLinkHTML =
        '<li><a class="calculateTagClass" href="#tag-' +
        tag +
        '"><span>' +
        tag +
        "</span></a></li>";

      const tagLinkHTML =
        "<li>" + calculateTagClass(allTags[tag], tagsParams) + "<li>";
      console.log("tagLinkHTML:", tagLinkHTML);
      /* add generated code to html variable */
      html = html + tagLinkHTML;

      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags.hasOwnProperty(tag)) {
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }

      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  const tagsParams = calculateTagsParams(allTags);
  console.log("tagsParams:", tagsParams);

  /* [NEW] create variable for all links HTML code */
  const allTagsData = {tags: []};

  /* [NEW] START LOOP: for each tag in allTags: */
  for (let tag in allTags) {
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsData.tags.push({
      tag: tag,
      count: allTags[tag],
      className: calculateTagClass(allTags[tag], tagsParams)
    });
    /*[NEW] END LOOP: for each tag in allTags: */
  }
  /* [NEW] add html from allTagsHTML to tagList */
  tagList.innerHTML = templates.tagCloudLink(allTagsData);
}
