 // NAVBAR
 const toggleNav = document.querySelector('.Navbar__toggle');
 const Menu = document.querySelector('.menu-link');
 const menuitems = document.querySelector(".mini-menu-items");

 function classToggle() {
   const navs = document.querySelectorAll('.Navbar__items');
   toggleNav.classList.toggle("Toggle__show");


   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
 }

 toggleNav.addEventListener('click', classToggle);

 //for innermenu
 function menuToggle() {

   menuitems.classList.toggle("menu__show");
   document.querySelector(".right-arrow").classList.toggle("arrow-change");



 }
 Menu.addEventListener('click', menuToggle);


 function openCity(evt, cityName) {
   // Declare all variables
   var i, tabcontent, tablinks;

   // Get all elements with class="tabcontent" and hide them
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }

   // Get all elements with class="tablinks" and remove the class "active"
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }

   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(cityName).style.display = "block";
   evt.currentTarget.className += " active";


 }
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();

 // accordion
 var acc = document.getElementsByClassName("accordion");
 var i;

 for (i = 0; i < acc.length; i++) {

   acc[i].addEventListener("click", function () {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = 200 + "px";
     }
   });
 }

 /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.querySelector(".Navbar").style.top = "0";
     document.querySelector(".sticky-bar").style.marginTop = "60px";

   } else {
     document.querySelector(".Navbar").style.top = "-3.3rem";
     document.querySelector(".sticky-bar").style.marginTop = "0px";

   }
   prevScrollpos = currentScrollPos;
 }