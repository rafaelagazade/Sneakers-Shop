const menuItems = document.querySelectorAll(".menuItem");
const wrapper = document.querySelector(".sliderWrapper");
const navbottom = document.querySelector(".navBottom");
const faXmark = document.querySelector(".fa-chevron-down");
const FaDown = document.querySelector(".navv .down");

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
        code: "limegreen",
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

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const nav = document.querySelector(".navv");

let c = true;

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // cari slaydı dəyişir
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // seçilən məhsulu dəyişir
    choosenProduct = products[index];

    // cari məhsulun adın dəyişir
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // rəng seçimləri təyin edir
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

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const XS = window.matchMedia("(max-width:320px");
const S = window.matchMedia("(max-width:375px");
const M = window.matchMedia("(max-width:425px");
const L = window.matchMedia("(max-width:768px");
const XL = window.matchMedia("(max-width: 1024px)");

faXmark.onclick = () => {
  if (c) {
    faXmark.style.rotate = "180deg";
    faXmark.style.marginRight = "8px";
    nav.style.height = "auto";
    if (XS.matches) {
      faXmark.style.marginRight = "18px";
    } else if (S.matches) {
      faXmark.style.marginRight = "18px";
    } else if (M.matches) {
      faXmark.style.marginRight = "18px";
    } else if (L.matches) {
      faXmark.style.marginRight = "18px";
    } else if (XL.matches) {
      faXmark.style.marginRight = "18px";
    }
  } else {
    faXmark.style.rotate = "0deg";
    nav.style.height = "70px";
  }

  c = !c;
};

FaDown.onclick = () => {
  if (XS.matches) {
    FaDown.style.marginRight = "202px";
  } else if (S.matches) {
    FaDown.style.marginRight = "0px";
  } else if (M.matches) {
    FaDown.style.marginRight = "0px";
  } else if (L.matches) {
    FaDown.style.marginRight = "0px";
  } else if (XL.matches) {
    FaDown.style.marginRight = "0px";
  }
};
