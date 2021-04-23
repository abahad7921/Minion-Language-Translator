var btnid = document.querySelector("#button-click");
var txt = document.querySelector("textarea");
var output = document.querySelector("#output-block");



var serverURL = "https://api.funtranslations.com/translate/minion.json"

function createURL(text) {
    return serverURL + "?text=" + text;
}

function catchError(error) {
    console.log("error: can't access the API right now")
}

function clickHandler() {
    var text = txt.value;

    if (text == " ")
        alert("enter relevant text");
    else {
        fetch(createURL(text))
            .then(response => response.json())
            .then(json => {
                var bananaText = json.contents.translated;
                output.innerText = bananaText;
                console.log("API worked");
            })
            .catch(catchError);

    }
}

btnid.addEventListener("click", clickHandler);
//console.log(btnid);