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

//Collection Page
//Selecting sidebar and all tags

const sideBarFilter = document.querySelector(".sidebar__filter__s1")
const filters = document.getElementById("filters")
const closeBtn1 = document.querySelector("#closebtn1")

filters.addEventListener("click",function(){
    sideBarFilter.style.transform = "translateX(0)"
    sideBarFilter.style.transition = "1s"
})

closeBtn1.addEventListener("click",function(){
    sideBarFilter.style.transform = "translateX(-310px)"
    sideBarFilter.style.transition = "1s"

})



//Search Functionality

    const productContainer = document.querySelector(".product__container")
    const search = document.getElementById("search")
    const productList = productContainer.querySelectorAll("div")

    search.addEventListener("keyup",function(event){
        var enteredValue = event.target.value.toUpperCase()

        for(count=0;count<productList.length;count=count+1)
            {
                var productName = productList[count].querySelector("h3").textContent
                
                if(productName.toUpperCase().indexOf(enteredValue)<0)
                    {
                        productList[count].style.display = "none"
                    }
                else
                    {
                        productList[count].style.display = "block"
                    }
            }
    })