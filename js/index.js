const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// sets the entire body to a color for the background. 
document.body.style.backgroundColor = 'lavender';

// Example: Update the img src for the logo
// images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// below done to purely impact the 
logo.setAttribute('alt', textContent = "The Great Idea! Company logo!")
// console.log(logo)

const ctaImg = document.getElementById('cta-img').src = siteContent['cta']["img-src"]

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
console.log(middleImg)


const navItems = document.querySelectorAll('nav a')
console.log(navItems);
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// querySelect nav
let newNavItem = document.querySelector("nav");
// create a new anchor tag
let newAnchorTag = document.createElement("a")
// give the new anchor tag text
newAnchorTag.textContent = "Life Outside of Code";
// give the anchor tag color since it is not apart of the navItems nodeList
newAnchorTag.style.color = 'green';
// append the new anchor tag to the end of the query selector of nav
newNavItem.appendChild(newAnchorTag)

// create another new anchor tag but prepend it
let newAnchorTag2 = document.createElement("a")
// give it text
newAnchorTag2.textContent = 'Blog'
// prepend the new anchor tag
newNavItem.prepend(newAnchorTag2);
// give it some color
newAnchorTag2.style.color = 'green';
console.log(newNavItem)


// change the nav items to green
navItems.forEach (navItems => navItems.style.color = 'green')

// section class cta    "h1": "DOM Is Awesome",
const ctaH1 = document.getElementsByTagName('h1');
ctaH1[0].textContent = siteContent.cta.h1;
console.log(ctaH1);

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent.cta.button;
console.log(ctaButton);

// h4 selectors
const h4 = document.querySelectorAll('h4')
// main-content section 
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

// h4.addEventListener('hover', function(){
//   if (this.style.backgroundColor === 'forestgreen'){
//     this.style.backgroundColor === 'purple';
//   } else {
//     this.style.backgroundColor = 'blue';
//   }
// })
// contact section
h4[5].textContent = siteContent["contact"]["contact-h4"];
console.log(h4)

// used for loop to set h4 elements to forestgreen. 
for (let i =0; i <h4.length; i++){
  // trying to set last child to black text
  if (h4[i] === (':last-child')) {
   h4[i].style.color = 'black';
  }
  h4[i].style.color = 'forestgreen';
}
// p selectors
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)
// main-content section 
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

// contact section
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];

// footer section 
paragraphs[8].textContent = siteContent["footer"]["copyright"];
