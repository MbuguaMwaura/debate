/*(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCKUWhdRIDgK4uM412c2x5MIFTOjsEqg8",
    authDomain: "authentication-c8f7f.firebaseapp.com",
    databaseURL: "https://authentication-c8f7f.firebaseio.com",
    projectId: "authentication-c8f7f",
    storageBucket: "",
    messagingSenderId: "315873449998"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
 
  btnLogin.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

    
  });
  
  btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
          console.log(firebaseUser);

          btnLogout.classList.remove('hide');
      } else {
          console.log('not logged in' );
          btnLogout.classList.add('hide');
      }
  });
}());
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /* Initialize Firebase
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

getRealtimeUpdates();*/
$(document).ready(function () {
    document.getElementById("btnTopic").addEventListener("click", function () {
       
        var text = topic.value;
        var paragraph = document.createElement("li");
        var node = document.createTextNode(text);
        paragraph.appendChild(node);
        var element = document.getElementById("submitted");
        element.appendChild(paragraph);
       
        $("#btnAdd").show();
        $("#formTopic").hide();
        $("li").addClass('something'); 

         document.getElementById("btnAdd").addEventListener("click", function () {
             $("#btnAdd").hide();
             $("#formTopic").show();
         })

        
       var button = document.createElement("button");
       button.innerHTML = "comment";

        button.addEventListener("click", function () {
            $("#formComment").show();  

            
                document.getElementById("add").addEventListener("click", function () {

                    var text = words.value;
                    var paragraph = document.createElement("li");
                    var node = document.createTextNode(text);
                    paragraph.appendChild(node);
                    var element = document.getElementById("para");
                    element.appendChild(paragraph);


                });
            


            
        });
       
       
       var i;
        for (i = 0; ;i++) {
       var body = document.getElementsByClassName("something")[i];
       body.appendChild(button);
      
        };
     
       
        

       
    
   
        
    });
});

var submitted = {
    "post" : "",
    "id": "",
}