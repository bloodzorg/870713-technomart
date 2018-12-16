var mapLink = document.querySelector(".contacts-img-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");
var Link = document.querySelector(".about-us-btn");
var Popup = document.querySelector(".modal-write-us");
var Close = Popup.querySelector(".modal-write-us-close");

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

var cartLink = document.querySelector(".buy-button");
var cartPopup = document.querySelector(".modal-in-cart");
var cartClose = cartPopup.querySelector(".modal-in-cart-close");

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});
