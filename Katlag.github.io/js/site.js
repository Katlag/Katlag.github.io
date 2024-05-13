function requestForm() {
    // defining variables x, y 
    var x = document.forms["request"]["name", "email", "number"].value;
    var y = document.forms["request"]["phone"].value;

    // checks to see phone is numerical
    if (isNaN(y)) {
        alert("Phone must be a numerical input")

        // checks to see credit card input is numerical

    } else {
        // if no fields are empty, message will thank user for registering
        if (x != "") {
            alert("Thank you for registering!");
        }

        // if any/all fields are empty, error message will be displayed
        else {
            alert("Please fill in all fields before registering");
        }
    }
}