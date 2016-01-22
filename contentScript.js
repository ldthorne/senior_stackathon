$(".UFILikeLink").remove();

var currentHeight = $("#globalContainer").height();

// console.log("UCw", $(".userContentWrapper"))
// console.log("links", $(".profileLink"))
$(document).on('scroll', function(event){
	var heightRn = $("#globalContainer").height()
	console.log(currentHeight === heightRn)
	if(currentHeight !== $("#globalContainer").height()){
		deleteAllDomLikes()
		currentHeight=heightRn;
	}
})


function deleteAllDomLikes(){
	var arr = [].slice.call($("._5pbw"))
	arr.forEach(function(card){
		console.log(card.innerText);
	});
	// $(".UFILikeLink").remove();
}