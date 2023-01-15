import './style.css';
import Icon from './rest.jpg';
import Icon2 from './plate.jpg';
//import Icon3 from './chef.jpg';

function addContent() {
    const content = document.createElement("div");
    content.classList.add("content");
    document.querySelector("body").appendChild(content);
    addSidebar(content);
    addTextContainer(content);
}

function addSidebar(content) {
    const restImage = new Image();
    restImage.src = Icon;
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    content.appendChild(sidebar);
}

function addTextContainer(content) {
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    content.appendChild(textContainer);
    addMenuContainer(textContainer);
    addTitle(textContainer);
    addRestaurantInfo(textContainer);
}

function addTitle(textContainer) {
    const title = document.createElement("p");
    title.textContent = "La Folie";
    title.classList.add("title");
    textContainer.appendChild(title);
}

function addRestaurantInfo(textContainer) {
    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    restaurantInfo.classList.add("restaurant-info");
    textContainer.appendChild(restaurantInfo);
}

function addMenuContainer(textContainer) {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    textContainer.appendChild(menuContainer);

    const homeButton = document.createElement("button");
    homeButton.textContent = "home";
    homeButton.classList.add("home-button");
    homeButton.addEventListener("click", () => {
        if (document.querySelector(".plate")) {
            document.querySelector(".plate").remove();
        }
        document.querySelector(".title").textContent = "La Folie";
        document.querySelector(".restaurant-info").textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    });

    const menuButton = document.createElement("button");
    menuButton.textContent = "menu";
    menuButton.classList.add("menu-button");
    menuButton.addEventListener("click", () => {
        openMenuPage();
    })

    const contactButton = document.createElement("button");
    contactButton.textContent = "contact";
    contactButton.classList.add("contact-button");
    contactButton.addEventListener("click", () => {
        openContactPage();
    })

    menuContainer.append(homeButton, menuButton, contactButton);
}

function openMenuPage() {
    document.querySelector(".title").textContent = "Menu";
    document.querySelector(".restaurant-info").textContent = "Signature Meal";
    const plateImage = new Image();
    plateImage.src = Icon2;
    plateImage.classList.add("plate");
    if (document.querySelector(".text-container").childNodes.length === 3) {
        document.querySelector(".text-container").appendChild(plateImage);
    }
}

function openContactPage() {
    document.querySelector(".title").textContent = "Contact";
    document.querySelector(".restaurant-info").textContent = "Visit us at 66 Avenue des Pr'es / Paris, France" + "\r\n" + "Telephone: 429 123 1";
    document.querySelector(".plate").remove();
}


addContent();

