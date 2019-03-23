function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x.trim() === '') {
        alert("Name must be filled out");
        return false;
    }
}