const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Shirts",
    price: 149,
    colors: [
      {
        code: "wheat",
        img: "./img/button down shirt.jpg",
      },
      {
        code: "blue",
        img: "./img/blue.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "AIR FORCE",
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
    id: 3,
    title: "Hoodie",
    price: 109,
    colors: [
      {
        code: "#b451c8",
        img: "./img/lavender_hoodie.jpg",
      },
      {
        code: "black",
        img: "./img/hoodie_black.png",
      },
    ],
  },
  {
    id: 4,
    title: "Bags",
    price: 129,
    colors: [
      {
        code: "Pink",
        img: "./img/pink_bg.jpg",
      },
      {
        code: "Black",
        img: "./img/black_bg.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Caps",
    price: 99,
    colors: [
      {
        code: "black",
        img: "./img/black_cap",
      },
      {
        code: "beige",
        img: "./img/beige_cap",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
