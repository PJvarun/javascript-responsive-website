debugger;
const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll('.menuItem')
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


  let choosenProduct =products[0]

  const curentProductImg= document.querySelector('.productImg');
  const curentProductTitle= document.querySelector('.productTitle')
  const curentProductPrice= document.querySelector('.productPrice')
  const curentProductColors= document.querySelectorAll('.color')

  const curentProductSizes= document.querySelectorAll('.size')

/* ------- using foreach method =>forEach() calls a function for each element in an array:--------*/
menuItems.forEach((item, index)=>{ 
    item.addEventListener('click',()=>{
        // change the current slide
        console.log("you clicked!"+ index);
        wrapper.style.transform =`translateX(${-100* index}vw)`;

        // change the choosen product
        choosenProduct = products[index]


        //change texts of currentProduct

        curentProductTitle.textContent = choosenProduct.title;
    curentProductPrice.textContent = "$" + choosenProduct.price;
   curentProductImg.src= choosenProduct.colors[0].img;
   // assigning new colors
   
   curentProductColors.forEach((color,index)=>{
    color.style.backgroundColor = choosenProduct.colors[index].code
   });


});
});

curentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        curentProductImg.src = choosenProduct.colors[index].img
    })
})

curentProductSizes.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        curentProductSizes.forEach((size)=>{
            size.style.backgroundColor ="white";
            size.style.color ="black"
        })
      size.style.backgroundColor="black"
      size.style.color="white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
})
close.addEventListener("click",()=>{
    payment.style.display ="none"
})
