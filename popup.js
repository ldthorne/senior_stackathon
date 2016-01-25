$(document).ready(function() {
    //get the list of already blocked people
    getListOfPeople();
    //add click handler to submit button to add a person to blocked list when clicked
    $("#submit-button").click(function() {
        //when submit button is clicked, run the save button 
        saveChanges();
    });
})

$(document).on('click', 'button', function(e) {
    var idx = $(e)[0].currentTarget.id;
    deletePersonFromList(idx);
    // console.log($("#" + idx))
    $($(e)[0].currentTarget).remove()
    $("#" + idx).remove()
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.update(tabs[0].id, {
            url: tabs[0].url
        });
    });
});


function deletePersonFromList(index) {
    // console.log("delete person from list being called on index", index)
    chrome.storage.local.get(function(values) {
        // console.log("DPFL getting vals", values)
        namesArr = JSON.parse(values.namesArr);
        namesArr.splice(index, 1);
        // console.log("DPFL modified values", namesArr)

        chrome.storage.local.set({
                'namesArr': JSON.stringify(namesArr)
            },
            function() {
                // Notify that we saved.
                getListOfPeople();
                $("#js-response").empty()
                $("#js-response").append('Removed name!');
            }
        );
    })
}

function getListOfPeople() {
    //deletes the contents of the list div 
    // $("#list").empty();
    //grabs the current names from local storage
    chrome.storage.local.get(function(values) {
        //names come back as a string of an array (only way to store data with chrome, so we have to JSON.parse it to turn it into a real array when we get it back
        //if there aren't any names, append to the list-title div that they don't have anyone
        if (JSON.parse(values.namesArr).length === 0) {
            $("#list-title").empty().append("You haven't added anyone to the list yet. Add someone!");
            //if there are names...
        } else {
            $("#list-title").empty().append("List of people whose like buttons we're deleting:")
                //empty the title of the list div
            $("#list").empty(); //empty the names
            $("#buttons").empty(); //empty the delete buttons
            JSON.parse(values.namesArr).forEach(function(name, index) {
                //loop through each name and their name and a delete button to the div of people
                //the delete button and name share the same id (their index), so it's easy to delete both
                $("#list").append("<p id=" + index + ">" + name + "<br><br>");
                $("#buttons").append('<button type="button" class="btn btn-circular btn-default delete-btns" id="' + index + '" aria-label="Left Align"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span><br><br>')
            });
        }
        //send a message to content script to indicate that there's a new value in the namesArr
        sendMessageToContentScript();
    })
}

//send a message to the content script, which has access to the DOM of the page
function sendMessageToContentScript() {
    chrome.storage.local.get(function(values) {
        //get all the names in local storage and send to contentScript (this is code from google's docs for extensions (https://developer.chrome.com/extensions/messaging)
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var message = values.namesArr;
            chrome.tabs.sendMessage(tabs[0].id, {
                names: message
            }, function(response) {
                // console.log(response);
            });
        });
    })
}


//save the changes on submit button click
function saveChanges() {
    //clear the js-response div
    $("#js-response").empty();
    // get the value from the text input
    var theValue = $("#name-entry").val()
    // error handling to see if they wrote a name before submission
    if (!theValue) {
        $("#js-response").append('No name specified!');
    } else {
        //if passed 'error handling', grabs all the names in local storage
        chrome.storage.local.get(function(values) {
            if (values.namesArr) {
                //if there are names in local storage, parses them to change them from a string of an array of strings to just an array of strings
                values.namesArr = JSON.parse(values.namesArr)
                //checks to see if the name that was submitted is already in the namesArr
                if (values.namesArr.indexOf(theValue) !== -1) {
                    $("#js-response").append('You\'ve already entered that name!')
                } else {
                    //if it wasn't in the array, push that new name to the array and save it to local storage
                    values.namesArr.push(theValue);
                    chrome.storage.local.set({
                            'namesArr': JSON.stringify(values.namesArr)
                        },
                        function() {
                            //after saving, it calls the getListOfPeople function, which will update the popup 
                            getListOfPeople();
                            //appends message to js-response
                            $("#js-response").append('Added a person whose like buttons we\'ll delete!');
                        }
                    );
                }
            } else {
                //if there was no array of people in the local storage, it creates an array and pushes the name submitted to it, then saves the newly-created array to local storage
                var namesArr = [];
                var name = theValue;
                namesArr.push(theValue)
                chrome.storage.local.set({
                        'namesArr': JSON.stringify(namesArr)
                    },
                    function() {
                        getListOfPeople();
                        $("#js-response").append('Created arr and saved');
                    }
                );
            }
        })
    }
}
