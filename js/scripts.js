

function getwords() {
    text = words.value;
    document.getElementById("para").innerHTML += '<p>' + text
    document.getElementById("words").value = ""
}

function fetchwords() {
    text = word.value;
    document.getElementById("p").innerHTML += '<p>' + text
    document.getElementById("word").value = ""
}