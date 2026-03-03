function showResult() {
    let name = document.getElementById("name").value;
    if(name === "") {
        document.getElementById("result").innerHTML = "Please enter name!";
    } else {
        document.getElementById("result").innerHTML =
        "Congratulations " + name + "! You Passed!";
    }
}
