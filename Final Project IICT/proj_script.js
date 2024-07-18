function openModal() {
  var modal = document.getElementById("myModal");
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }
}




let slideIndex = 1;




showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//  The showSlides function is called with the current slide index (slideIndex) which starts at 1. 
// It then gets all elements with the class "mySlides" and "dot" and loops through them to hide all the slides and remove the "active" class on the dots.
// Then it checks if the slideIndex is greater than the number of slides, if it is, it will set slideIndex to 1. 
// If it's less than 1, it sets slideIndex to the number of slides.
// It then sets the current slide to display block and sets the active class to the corresponding dot.

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  setTimeout(function(){
    if(slideIndex === slides.length){
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    showSlides(slideIndex);
  }, 4000);
}

//  The showSlides function is called with the current slide index (slideIndex) which starts at 1. 
// It then gets all elements with the class "mySlides" and "dot" and loops through them to hide all the slides and remove the "active" class on the dots.
// Then it checks if the slideIndex is greater than the number of slides, if it is, it will set slideIndex to 1. 
// If it's less than 1, it sets slideIndex to the number of slides.
// It then sets the current slide to display block and sets the active class to the corresponding dot.



function bookAppointment() {
  var doctorSelect = document.getElementById("slct");
  var selectedDoctor = doctorSelect.options[doctorSelect.selectedIndex].value;
  var nameInput = document.getElementById("userName").value;
  var emailInput = document.getElementById("e_mail").value;
  var phoneInput = document.getElementById("password").value;

  if (nameInput === "") {
    alert("Please enter a username.");
  }
  else if (emailInput.indexOf("@") === -1) {
    alert("Please enter a valid email address.");
  }
  else if (phoneInput.length < 4 || phoneInput.length > 12) {
    alert("Please enter a valid phone number (between 4 and 12 digits).");
 }
  else if (selectedDoctor === "Select Doctors"){
    alert("Please Select a doctor ");
  }
  else{
    alert(nameInput + "'s appointment has been booked with " + selectedDoctor + ".");
  }
}


function newsletter() {
  var emailInput = document.getElementById("e_mail").value;
  if (emailInput.indexOf("@") === -1) {
    alert("Please enter a valid email address.");
  }
  else {
    alert("You are Now Subscribed.");
  }
}