
//selecting navbar offer tag,Cancelbtn
const offerBar = document.querySelector(".offer__bar")
const cancelBtn = document.getElementById("cancelbtn")

cancelBtn.addEventListener("click",function(){
    offerBar.style.display = "none"
})

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

//Selecting Slider images and Tags

const sliderImage = document.querySelector(".slide--image")
const sliderRightBtn = document.querySelector(".slide--rightbtn")
const sliderLeftBtn = document.querySelector(".slide--leftbtn")
const sliderMargin = 0

sliderRightBtn.addEventListener("click",function(){
    
    if(sliderMargin == 0){
        sliderImage.style.marginLeft = "-35%"
        sliderImage.style.transition = "1s"
    }

    else if(sliderMargin == 200){
        sliderImage.style.marginLeft = "-35%"
        sliderImage.style.transition = "1s"
    }

    else{
        sliderImage.style.marginright = "35%"
        sliderImage.style.transition = "1s"
    }

})

sliderLeftBtn.addEventListener("click",function(){
    
    if(sliderMargin == 200){
        sliderImage.style.marginRight = "-35%"
        sliderImage.style.transition = "1s"
    }

    else{
        sliderImage.style.marginLeft = "-35%"
        sliderImage.style.transition = "1s"
    }

})
