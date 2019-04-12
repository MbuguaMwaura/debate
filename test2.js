var config = {
    apiKey: "AIzaSyBnN05Jw4Nikbp0_wszhMWmRhARvgjeOIQ",
    authDomain: "debate2-f1bbe.firebaseapp.com",
    databaseURL: "https://debate2-f1bbe.firebaseio.com",
    projectId: "debate2-f1bbe",
    storageBucket: "debate2-f1bbe.appspot.com",
    messagingSenderId: "390818185752"
};
firebase.initializeApp(config);
var database = firebase.database();

const postListRef = database;
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#lastestHotDogStatus");
const saveButton = document.querySelector("#saveButton");


saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    var newPostRef = postListRef.push(textToSave);
    newPostRef.set({
        hotDogStatus: textToSave
    }).then(function () {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Got an error", error);
    });
    document.getElementById("userText").innerHTML = textToSave;
});