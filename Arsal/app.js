document.getElementById("findTable").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form behavior

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    // Check if fields are filled
    if (name && email && date && time && people) {
        document.getElementById("outputMessage").innerText = "Table is available!";
    } else {
        document.getElementById("outputMessage").innerText = "Please fill all the fields.";
    }
});