$(document).ready(function() {
    getListOfPeople();
    $("#submit-button").click(function() {
        saveChanges();
    });
})

$(document).on('click', 'button', function(e) {
    var idx = $(e)[0].currentTarget.id;
    deletePersonFromList(idx);
    console.log($("#"+idx))
    $($(e)[0].currentTarget).remove()
    $("#"+idx).remove()
});


function deletePersonFromList(index){
    console.log("delete person from list being called on index", index)
    chrome.storage.local.get(function(values){
        console.log("DPFL getting vals", values)
        namesArr = JSON.parse(values.namesArr);
        namesArr.splice(index,1);
        console.log("DPFL modified values", namesArr)

        chrome.storage.local.set({
               'namesArr': JSON.stringify(namesArr)
            },
            function() {
                // Notify that we saved.
                getListOfPeople();
                $("#js-response").empty()
                $("#js-response").append('Removed name from arr and saved');
            }
        );
    })
}

function getListOfPeople() {
    console.log("GLOP being called")
    $("#list").empty();
    chrome.storage.local.get(function(values) {
        console.log("GLOP getting vals", values)
        if (values.namesArr) {
            JSON.parse(values.namesArr).forEach(function(name, index) {
                console.log("appending shit", index, name)
                $("#list").append("<p id="+index+">"+name+"<br><br>");
                $("#buttons").append('<button type="button" class="btn btn-circular btn-default delete-btns" id="'+index+'" aria-label="Left Align"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span><br><br>')
            });
        }
        sendMessageToContentScript();
    })
}

function sendMessageToContentScript() {
    console.log("sending message to content script")
    chrome.storage.local.get(function(values){
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            //tabs is an array even if there is only one result
            var message = values.namesArr;
            console.log("sent message to content script", message)
        });
    })
}

function saveChanges() {
    console.log("saving changes")
    $("#js-response").empty();
    // // Get a value saved in a form.
    var theValue = $("#name-entry").val()
        // // Check that there's some code there.
    if (!theValue) {
        $("#js-response").append('No name specified!');
        // return;
    } else {
        chrome.storage.local.get(function(values) {
            if (values.namesArr) {
                values.namesArr = JSON.parse(values.namesArr)
                console.log(values.namesArr)
                if (values.namesArr.indexOf(theValue) !== -1) {
                    $("#js-response").append('name already in arr')
                } else {
                    values.namesArr.push(theValue);
                    chrome.storage.local.set({
                            'namesArr': JSON.stringify(values.namesArr)
                        },
                        function() {
                            // Notify that we saved.
                            getListOfPeople();
                            $("#js-response").append('Pushed new name to arr and saved');
                        }
                    );
                }
            } else {
                console.log('being called')
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


    // // Save it using the Chrome extension storage API.

}
