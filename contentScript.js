'use strict';

let people;
$(document).ready(function() {
    //when the DOM is loaded, grab data from local storage and, if there's a names array that has data inside it, call the deleteAllDomLikes function with those names  
    chrome.storage.local.get(function(values) {
        if (values.namesArr) {
            people = JSON.parse(values.namesArr);
            if (people.length) {
                deleteAllDomLikes(people);
            }
        }
    });
});


//this function will continuously check the DOM for more elements to delete
let currentHeight = $("#globalContainer").height();
//gets the height of the div that contains all the data in the newsfeed when the page loads
//when the page is scrolled on...
$(document).on('scroll', function() {
    //grab the current height
    const heightRightNow = $("#globalContainer").height();
    //if the current height is not equal to the height when the page was originally loaded it, then the div has extended and there's new content to be deleted (potentially)
    if (currentHeight !== $("#globalContainer").height()) {
        //grabs data from local storage
        chrome.storage.local.get(function(values) {
            if (values.namesArr) {
                people = JSON.parse(values.namesArr);
                if (people.length) {
                    //if there's stuff in the array, call the deleteAllDomLikes fn with the names
                    deleteAllDomLikes(people);
                }
            }
            //sets the current height to height right now so the comparison of div heights can be done in the future 
            currentHeight = heightRightNow;
        });
    }
});


//adds an event listener which will listen for a message from popup.js. it's set up so that popup js will send a message when a new name is added to the array of people. if this receives a message, it checks the local storage and calls the delete function with the updated data 
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    chrome.storage.local.get( (values) => {
        if (values.namesArr) {
            people = JSON.parse(values.namesArr);
            if (people.length) {
                deleteAllDomLikes(people);
            }
        }
    });
});

//this function takes in a list of people that it needs to screen for and will recurse through the DOM to check for posts that they're in and, if they're in a post, delete the like button. the "_5pbw" class is the class that has the name of the people in the post. its parent, ".userContentWrapper" is a card on facebook that has the name of the person, the caption of the post/status update, and the like buttons. it has a child class ("._42nr"), which is the row of like, comment, and share buttons, which has a child of ".UFILikeLink", which is the like button. if facebook changes up the structure of its html at all, this program will break. this was all found by scrolling through a facebook page in html and looking for patterns from posts. 
function deleteAllDomLikes (peopleToDelete) {
    peopleToDelete.forEach( (person) => {
        person = person.toLowerCase();
        $("._5pbw").each(function() {
            const titleOfPost = $(this);
            let othersInPost = titleOfPost.find("[data-hover='tooltip']")[0];
            let indexOfOthersInPost;
            if (othersInPost && othersInPost.outerHTML) {
                othersInPost = othersInPost.outerHTML.toLowerCase();
                indexOfOthersInPost = othersInPost.indexOf(person); //this could be -1
            }
            const textOfPost = titleOfPost[0].innerText.toLowerCase();
            //inner text contains the names people who posted/shared
            //if the textOfPost contains the person we're looking for, find the like button and delete it by look at the parent and then the children.
            if (textOfPost.indexOf(person) > -1 || (indexOfOthersInPost && indexOfOthersInPost > -1)) {
                const wholePostCard = titleOfPost.parents(".userContentWrapper");
                const likeButton = wholePostCard.find("._42nr").find(".UFILikeLink");
                likeButton.remove();
            }
        });
    });
}
