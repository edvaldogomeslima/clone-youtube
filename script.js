var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var subscribed = document.querySelector(".subscribed-list");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    subscribed.classList.toggle("small-subscribed")
    container.classList.toggle("large-container")
}
