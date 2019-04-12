
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /* Initialize Firebase
*/
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
             $("#formTopic").show();
        });


       
       var i;
        for (i = 0; ;i++) {
       var body = document.getElementsByClassName("something")[i];
       body.appendChild(button);
      
        };
     
       
        

       
    
   
        
    });
});
