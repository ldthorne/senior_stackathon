var people;
$(document).ready(function(){
	chrome.storage.local.get(function(values){
        people = JSON.parse(values.namesArr)
        console.log(people)
    	deleteAllDomLikes(people)
    })
})

var currentHeight = $("#globalContainer").height();
$(document).on('scroll', function(event) {
    var heightRn = $("#globalContainer").height();
    if (currentHeight !== $("#globalContainer").height()) {
    	console.log('hello no people');
    	chrome.storage.local.get(function(values){
	        people = JSON.parse(values.namesArr)
	    	deleteAllDomLikes(people)
        	currentHeight = heightRn;
	    })
    }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	console.log("people added or removed from list")
        chrome.storage.local.get(function(values){
	        people = JSON.parse(values.namesArr)
	        console.log("FROM CONTENT", people)
	        deleteAllDomLikes(people)
	    })
    }
);


function deleteAllDomLikes(peopleToDelete) {
    console.log(peopleToDelete)
    peopleToDelete.forEach(function(person) {
        person = person.toLowerCase();
        $("._5pbw").each(function() {
            var titleOfPost = $(this);
            var textOfPost = titleOfPost[0].innerText.toLowerCase();
            if (textOfPost.indexOf(person) > -1) {
                console.log("true")
                var wholePostCard = titleOfPost.parents(".userContentWrapper");
                var likeButton = wholePostCard.find("._42nr").find(".UFILikeLink");
                likeButton.remove();
                console.log("removing because ", person)
            }
        });
    })
}
