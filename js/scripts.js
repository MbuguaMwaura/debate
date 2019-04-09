 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD0TgvYXkEeiAAJfjaLmm-lS2OerJpFZ1I",
    authDomain: "debate-ad49b.firebaseapp.com",
    databaseURL: "https://debate-ad49b.firebaseio.com",
    projectId: "debate-ad49b",
    storageBucket: "debate-ad49b.appspot.com",
    messagingSenderId: "270217448754"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  
  const docRef = firestore.doc("samples/sandwichData");
  const outputHeader = document.querySelector("#hotDogOutput");
  const inputTextField = document.querySelector("#lastestHotDogStatus");
  const saveButton = document.querySelector("#saveButton");
  
  saveButton.addEventListener("click", function(){
      const textToSave = inputTextField.value;
      console.log("I am going to save " + textToSave + " to Firestore");
      docRef.set({
          hotDogStatus: textToSave
      }).then(function(){
          console.log("Status saved!");
      }).catch(function(error){
          console.log("Got an error", error);
      });
      document.getElementById("userText").innerHTML = textToSave;
    });

    loadButton.addEventListener("click", function(){
      docRef.get().then(function(doc){
          if(doc && doc.exists){
              const myData = doc.data();
              outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
          }
      }) .catch(function(error){
        console.log("Got an error", error); 
    })
});

getRealtimeUpdates = function(){
    docRef.onSnapshot(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            console.log("Check this out",doc);
            outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus;
        }
    })
}

getRealtimeUpdates();