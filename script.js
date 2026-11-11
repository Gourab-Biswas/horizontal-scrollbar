let scrollContainer = document.querySelector(".galary")
let backBtn = document.querySelector(".backBtn")
let nextBtn = document.querySelector(".nextBtn")


scrollContainer.addEventListener("wheel",(e)=>{
e.preventDefault()
scrollContainer.scrollLeft += e.deltaY
scrollContainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 320
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth" 
    scrollContainer.scrollLeft -= 320
})

// test for github