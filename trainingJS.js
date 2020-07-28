//  Part I
//  1. Get the main content container OK

let getContent = function () {
    return document.getElementById('main');

}
console.log(getContent());


//  2. Get first post title OK

let getTitle = function () {
    return document.getElementsByTagName("title")[0];

}

console.log(getTitle());


//  3. Get first post content OK

let getPost = function () {
    return document.getElementsByTagName("article")[0];
}

console.log(getPost());


//  4. Get all post titles OK

let getTitles = function () {
    return document.getElementsByTagName("h2");

}

console.log(getTitles());


//  5. Change the value for the first title OK

let changeTitle = function () {
    return document.getElementsByTagName("title")[0].childNodes[0].nodeValue = "This is the new title"

}
console.log(changeTitle());


//  6. Change the URL for the first title link OK
let changeUrl = function () {
    document.getElementById("gg").setAttribute("href", "http://www.google.com");
}
console.log(changeUrl());


//  7. Change the background color for the body OK

let bodyColor = function () {
    return document.body.style.backgroundColor = "lightpink";

}

console.log(bodyColor());


//  8. Add a new class to the articles then add styles OK

let newClass = function () {
    let articles = document.getElementsByTagName('article');
    for (var i = 0; i < articles.length; i++) {
        articles[i].classList.add('newclass');
    }

}
newClass();


//  Part II

//  1.  Select the parent element for the first post title OK

let selectParent = function () {
    return document.getElementsByClassName("entry-title")[0].parentElement.nodeName;

}

console.log(selectParent());


//  2.  Select the first post and log the sibligns OK

let logSiblings = function () {
    let post = document.getElementsByClassName("post")[0];
    let children = post.parentNode.children;
    for (let i = 0; i < children.length; i++) {
        if ( post !== children[i] ) {
            console.log( children[i] );
        }
    }
}

logSiblings();


//  3.  Select the #main container and log the children OK


let menu = document.getElementById('main');
let children = menu.children;
console.log(children);


// Bonus Set the entry content with the curent date and time and update it every x (as parameter) seconds

