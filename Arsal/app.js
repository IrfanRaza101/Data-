document.getElementById("findTable").addEventListener("click", function (event) {
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;


    if (name && email && date && time && people) {
        document.getElementById("outputMessage").innerText = "Table is available!";
        document.getElementById("outputMessage").style.color = "green";
    } else {
        document.getElementById("outputMessage").innerText = "Please fill all the fields.";
        document.getElementById("outputMessage").style.color = "red";
    }
});
