$(document).ready(function () {
    document.getElementById("btnTopic").addEventListener("click", function () {
        var text = topic.value;
        var paragraph = document.createElement("p");
        var node = document.createTextNode(text);
        paragraph.appendChild(node);
        var element = document.getElementById("submitted");
        element.appendChild(paragraph);
        //document.getElementById("top").innerHTML += '<p>' + text
        //document.getElementById("topic").value = ""

        $("#btnAdd").show();
        $("#formTopic").hide();

        document.getElementById("btnAdd").addEventListener("click", function () {
            $("#btnAdd").hide();
            $("#formTopic").show();
        })


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
    });
});