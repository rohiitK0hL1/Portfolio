var typed = new Typed(".text" ,{
    strings:["Web Developer", "AI/ML Enthusiast", "Blockchain Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});

function getValue() {
    var inputElement = document.getElementById("myInput");
    var placeholderValue = inputElement.getAttribute("placeholder");
    alert("Placeholder value: " + placeholderValue);
  }