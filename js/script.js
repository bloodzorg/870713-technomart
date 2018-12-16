var mapLink = document.querySelector(".contacts-img-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");
var Link = document.querySelector(".about-us-btn");
var Popup = document.querySelector(".modal-write-us");
var Close = Popup.querySelector(".modal-write-us-close");
var form = Popup.querySelector("form");
var password = Popup.querySelector("[name=text]");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.add("modal-show");
});

Close.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (Popup.classList.contains("modal-show")) {
      Popup.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function (evt) {
    if (!text.value) {
      evt.preventDefault();
      console.log("Нужно ввести Имя и почту");
    }
});

var cartlink = document.querySelector(".buy-button");
var cartpopup = document.querySelector(".modal-in-cart");
var cartclose = cartpopup.querySelector(".modal-in-cart-close");

cartlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (cartpopup.classList.contains("modal-show")) {
      cartpopup.classList.remove("modal-show");
    }
  }
});
