const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Product Name",
        price: "₦200000",
        colors: [
            {
                code: "blue",
                img: "img/slider-img.2.png",
            },
            {
                code: "black",
                img: "img/slider-img.2.1.png",
            },
        ],
    },
    {
        id: 2,
        title: "Product Name",
        price: "₦200000",
        colors: [
            {
                code: "blue",
                img: "img/slider-img.3.png",
            },
            {
                code: "grey",
                img: "img/slider-img.3.1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Product Name",
        price: "₦200000",
        colors: [
            {
                code: "blue",
                img: "img/slider-img.4.png",
            },
            {
                code: "purple",
                img: "img/slider-img.4.1.png",
            },
        ],
    },
    {
        id: 4,
        title: "Product Name",
        price: "₦200000",
        colors: [
            {
                code: "blue",
                img: "img/slider-img.5.png",
            },
            {
                code: "green",
                img: "img/slider-img.5.1.png",
            },
        ],
    },
    {
        id: 5,
        title: "Product Name",
        price: "₦200000",
        colors: [
            {
                code: "blue",
                img: "img/slider-img.6.png",
            },
            {
                code: "black",
                img: "img/slider-img.6.1.png",
            },
        ],
    },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color,index) =>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
    payment.style.opacity = "1 !important"
    let element = document.body
    element.style.opacity = "0.8"
    
})

close.addEventListener("click",()=>{
    payment.style.display = "none"
    let element = document.body
    element.style.opacity = "1"
})