const images = [
  {
    img: "../images/nft-images/2.jpg",
  },
  {
    img: "../images/nft-images/1.jpg",
  },
  {
    img: "../images/nft-images/3.jpg",
  },
  {
    img: "../images/nft-images/4.jpg",
  },
  {
    img: "../images/nft-images/5.jpg",
  },
  {
    img: "../images/nft-images/6.jpg",
  },
];
const images1 = [
  {
    img: "../images/portfolio-images/1.jpg",
  },
  {
    img: "../images/portfolio-images/2.jpg",
  },
  {
    img: "../images/portfolio-images/3.jpg",
  },
  {
    img: "../images/portfolio-images/4-1.jpg",
  },
  {
    img: "../images/portfolio-images/4.jpg",
  },
  {
    img: "../images/portfolio-images/5.jpg",
  },
  {
    img: "../images/portfolio-images/6.jpg",
  },
];
const images2 = [
  {
    img: "../images/travel-images/1.jpg",
  },
  {
    img: "../images/travel-images/2.jpg",
  },
  {
    img: "../images/travel-images/3.jpg",
  },
  {
    img: "../images/travel-images/4.jpg",
  },
  {
    img: "../images/travel-images/5.jpg",
  },
  {
    img: "../images/travel-images/6.jpg",
  },
  {
    img: "../images/travel-images/7.jpg",
  },
  {
    img: "../images/travel-images/8.jpg",
  },
];
const images3 = [
  {
    img: "../images/drum-images/1.jpg",
  },
  //   {
  //     img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  //   },
  //   {
  //     img: "https://media.istockphoto.com/photos/green-lawn-at-hill-at-sunrise-picture-id1294990080?b=1&k=20&m=1294990080&s=170667a&w=0&h=-VYbhmVtOU1u6wx03JJwhiQjTc3N4IhddyvQliHs5sM=",
  //   },
  //   {
  //     img: "https://c4.wallpaperflare.com/wallpaper/201/394/424/tree-of-the-life-wallpaper-preview.jpg",
  //   },
];
const images4 = [
  {
    img: "../images/lastProject-images/one.jpg",
  },
  {
    img: "../images/lastProject-images/2.jpg",
  },
  //   {
  //     img: "https://media.istockphoto.com/photos/green-lawn-at-hill-at-sunrise-picture-id1294990080?b=1&k=20&m=1294990080&s=170667a&w=0&h=-VYbhmVtOU1u6wx03JJwhiQjTc3N4IhddyvQliHs5sM=",
  //   },
  //   {
  //     img: "https://c4.wallpaperflare.com/wallpaper/201/394/424/tree-of-the-life-wallpaper-preview.jpg",
  //   },
];
let currentImage = 0;

let prevBtn = document.querySelectorAll("#prevBtn");
let nextBtn = document.querySelectorAll("#nextBtn");
let img = document.getElementById("image");
let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");
let img4 = document.getElementById("image4");

// // console.log(prevBtn)

function addition(images) {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
}
function substitution(images) {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
}
function showImage(images, img, e) {
  const itm = images[e];
  img.src = itm.img;
}

prevBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // let attribute = e.getAttribute("id");

    if (e.target.getAttribute("attr") == "one") {
      substitution(images);
      showImage(images, img, currentImage);
    } else if (e.target.getAttribute("attr") == "two") {
      substitution(images1);
      showImage(images1, img1, currentImage);
    } else if (e.target.getAttribute("attr") == "three") {
      substitution(images2);
      showImage(images2, img2, currentImage);
    } else if (e.target.getAttribute("attr") == "four") {
      substitution(images3);
      showImage(images3, img3, currentImage);
    } else {
      substitution(images4);
      showImage(images4, img4, currentImage);
    }
  });
});

nextBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.getAttribute("attr") == "one") {
      addition(images);
      showImage(images, img, currentImage);
    } else if (e.target.getAttribute("attr") == "two") {
      addition(images1);
      showImage(images1, img1, currentImage);
    } else if (e.target.getAttribute("attr") == "three") {
      addition(images2);
      showImage(images2, img2, currentImage);
    } else if (e.target.getAttribute("attr") == "four") {
      addition(images3);
      showImage(images3, img3, currentImage);
    } else {
      addition(images4);
      showImage(images4, img4, currentImage);
    }
  });
});

// let prevBtn = document.querySelector("#prevBtn");
// let nextBtn = document.querySelector("#nextBtn");
// let img = document.getElementById("image")
// console.log(prevBtn, nextBtn);

// nextBtn.addEventListener("click", function () {
//     currentImage++;
//     if (currentImage > images.length - 1) {
//         currentImage = 0;
//     }
//     showImage(currentImage)
// });
// prevBtn.addEventListener("click", function () {
//     currentImage--;
//     if (currentImage < 0) {
//         currentImage = images.length - 1;
//     }
//     showImage(currentImage);
// })

// burgericon section in js
let menuicon = document.getElementById("burgericon");
menuicon.addEventListener("click", function () {
  this.classList.toggle("change");
});

// scroll animation

ScrollReveal({
  reset: true,
  distance: "600px",
  duration: 2500,
  delay: 400,
});
// ScrollReveal().reveal("#blog", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".one", { delay: 100, origin: "left" });
ScrollReveal().reveal(".three", { delay: 100, origin: "right" });
ScrollReveal().reveal(".two", { delay: 100, origin: "top" });
ScrollReveal().reveal(".four", { delay: 200, origin: "left" });
ScrollReveal().reveal(".five", { delay: 200, origin: "right" });
ScrollReveal().reveal(".services", { delay: 200, origin: "right" });
ScrollReveal().reveal("#left-service", { delay: 200, origin: "left" });
ScrollReveal().reveal("#right-service", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".left-second-service", { delay: 200, origin: "left" });
ScrollReveal().reveal(".right-second-service", { delay: 200, origin: "right" });
ScrollReveal().reveal(".left-third-service", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".right-third-service", { delay: 200, origin: "bottom" });

// for top link
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// testing section but no need for my website

// let four = document.querySelector(".four");
// let five = document.querySelector(".five");
// let testing = document.querySelector(".testing");

// window.addEventListener('scroll', function () {
//     const windowHeight = window.pageYOffset;
//     console.log(windowHeight)
//     if (windowHeight >= 550) {
//         testing.classList.add("open");
//     } if (windowHeight >= 1000) {
//         testing.classList.remove("open")
//     }
// else {

//     // testing.classList.add('close');
// }
// })
