const creations = [
  {
    name: "Deep earth",
    img_desktop: "images/desktop/image-deep-earth.jpg",
    img_mobile: "images/mobile/image-deep-earth.jpg",
  },

  {
    name: "Night arcade",
    img_desktop: "images/desktop/image-night-arcade.jpg",
    img_mobile: "images/mobile/image-night-arcade.jpg",
  },
  {
    name: "Soccer team VR",
    img_desktop: "images/desktop/image-soccer-team.jpg",
    img_mobile: "images/mobile/image-soccer-team.jpg",
  },
  {
    name: "The grid",
    img_desktop: "images/desktop/image-grid.jpg",
    img_mobile: "images/mobile/image-grid.jpg",
  },
  {
    name: "From up above VR",
    img_desktop: "images/desktop/image-from-above.jpg",
    img_mobile: "images/mobile/image-from-above.jpg",
  },
  {
    name: "Pocket borealis",
    img_desktop: "images/desktop/image-pocket-borealis.jpg",
    img_mobile: "images/mobile/image-pocket-borealis.jpg",
  },
  {
    name: "The curiosity",
    img_desktop: "images/desktop/image-curiosity.jpg",
    img_mobile: "images/mobile/image-curiosity.jpg",
  },
  {
    name: "Make it fisheye",
    img_desktop: "images/desktop/image-fisheye.jpg",
    img_mobile: "images/mobile/image-fisheye.jpg",
  },
];

const container = document.getElementById("card-container");
const desktop_viewport = window.matchMedia("(min-width:750px)");

creations.forEach((creation) => {
  const card = document.createElement("div");
  card.classList.add("card");
  if (window.innerWidth >= 1000) {
    card.style.backgroundImage = "url(" + creation.img_desktop + ")";
  } else {
    card.style.backgroundImage = "url(" + creation.img_mobile + ")";
  }
  const card_title = document.createElement("div");
  card_title.classList.add("card-title");
  card_title.innerText = creation.name;
  card.appendChild(card_title);
  container.appendChild(card);


  
});

/* RESPONSIVE MENU */

const nav = document.querySelector("nav");
const menu = document.getElementById("nav-menu");
const icon_menu = document.getElementById("icon-menu");
const open_icon = document.getElementById("icon-open");
const close_icon = document.getElementById("icon-close");
menu_state = false;

function toggleMenu() {
  menu_state = !menu_state;

  if (!menu_state) {
    nav.style.height = 0;
    nav.style.backgroundColor = "unset";
    menu.style.display = "none";
    open_icon.style.display = "inline";
    close_icon.style.display = "none";
  } else {
    nav.style.height = "100vh";
    nav.style.backgroundColor = "black";
    menu.style.display = "inline";
    open_icon.style.display = "none";
    close_icon.style.display = "inline";
  }
}
////////////////////////////////////////////////////
let device_desktop = Boolean;
function resp() {
  if (desktop_viewport.matches) {
    device_desktop = true;
  } else {
    device_desktop = false;
  }
}

if (window.innerWidth >= 1000) {
  device_desktop = true;
} else {
  device_desktop = false;
}
window.resizeTo;


  //! FUN */

 /*  const modal = document.querySelector('.modal');
  function showModal(){
    modal.style.display ="block";
  } */
 
    //! END FUN */
  