//Selecting Sidebar,menu tag
const menu = document.querySelector(".navbar-menu")
const sideBar = document.querySelector(".sidebar")
const closeBtn = document.getElementById("closebtn")


menu.addEventListener("click",function(){
    sideBar.style.transform = "translateX(0)"
    sideBar.style.transition = "1s"
    offerBar.style.display = "none"
})


closeBtn.addEventListener("click",function(){
    sideBar.style.transform = "translateX(-310px)"
    sideBar.style.transition = "1s"
    offerBar.style.display = "flex"
})