//MOSTRAR Y OCULTAR CONTENIDO

// Inicializar constantes y llenarlas con los datos del body y del header de los menus
const allTabsBody = document.querySelectorAll(".tab-body-single");
const allTabsHead = document.querySelectorAll(".tab-head-single");

//Indica cual menu esta activo
let activeTab = 1;

//Funcion que se genera cada que se inicializa la app
const init = () => {
  showActiveTabBody();
  showActiveTabHead();
};

//Muestra el menu
const showActiveTabHead = () => {
  allTabsHead[activeTab - 1].classList.add("active-tab");
};

//Muestra la informacion
const showActiveTabBody = () => {
  hideAllTabBody();
  allTabsBody[activeTab - 1].classList.add("show-tab");
};

//Bloquea la informacion
const hideAllTabBody = () => {
  allTabsBody.forEach((singleTabBody) =>
    singleTabBody.classList.remove("show-tab")
  );
};

//Desactiva el menu
const hideAllTabHead = () => {
  allTabsHead.forEach((singleTabHead) =>
    singleTabHead.classList.remove("active-tab")
  );
};
//Funcion de escucha de cuando se inicializa
window.addEventListener("DOMContentLoaded", () => init());

//Funcion para cambiar el menu y el contenido activos
allTabsHead.forEach((singleTabHead) => {
  singleTabHead.addEventListener("click", () => {
    hideAllTabHead();
    activeTab = singleTabHead.dataset.id;
    showActiveTabHead();
    showActiveTabBody();
  });
});

//BUSQUEDA

//Creacion de variables que carguen la informacion del search y la lista de busqueda y variable vacia para cargar todos los datos de la API
const searchForm = document.querySelector(".app-header-search");
let searchList = document.getElementById("search-list");
let allData;

//Obtener el valor de la busqueda
const getInputValue = (event) => {
  event.preventDefault();
  let searchText = searchForm.search.value;
  console.log(searchText);
  fetchAllSuperHeroe(searchText);
};

//Evento de escucha de la barra de busqueda
searchForm.addEventListener("submit", getInputValue);

//Busqueda en la API
//api key = 6048421285204464
const fetchAllSuperHeroe = async (searchText) => {
  let url = `https://superheroapi.com/api.php/6048421285204464/search/${searchText}`;

  try {
    const response = await fetch(url);
    allData = await response.json();
    if (allData.response === "success") {
      console.log(allData);
      showSearchList(allData.results);
    }
  } catch (error) {
    console.log(error);
  }
};

//Mostrar lista de busqueda
const showSearchList = (data) => {
  searchList.innerHTML = "";
  data.forEach((dataItem) => {
    const divElem = document.createElement("div");
    divElem.classList.add("search-list-item");
    divElem.innerHTML = `<div class="search-list-item">
        <img src="${
          dataItem.image.url ? dataItem.image.url : ""
        }" alt="Imágen de busqueda super héroe">
        <p data-id = "${dataItem.id}" >${dataItem.name}</p>
    </div>`;
    searchList.appendChild(divElem);
  });
};

//Busqueda sin necesidad de apretar enter o el boton buscar mediante escuchar las teclas presionadas
searchForm.search.addEventListener("keyup", () => {
  if (searchForm.search.value.length > 1) {
    fetchAllSuperHeroe(searchForm.search.value);
  } else {
    searchList.innerHTML = "";
  }
});

//Escoger un heroe de la lista buscada
searchList.addEventListener("click", (event) => {
  let searchId = event.target.dataset.id;
  console.log(searchId);
  let singleData = allData.results.filter((singleData) => {
    return searchId === singleData.id;
  });
  showSuperHeroeDetails(singleData);
  searchList.innerHTML = "";
});

//MOSTRAR LA INFORMACION DEL SUPER EN CADA MENU

//Rellena de informacion a cada seccion del heroe
const showSuperHeroeDetails = (data) => {
  document.querySelector(
    ".app-body-content-thumbnail"
  ).innerHTML = `<img src="${data[0].image.url}" alt="${data[0].name}"/>`;

  document.querySelector(".name").textContent = data[0].name;
  document.querySelector(".powerstats").innerHTML = `
    <li>
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Inteligencia</span>
        </div>
        <span>${data[0].powerstats.intelligence}</span>
    </li>
    <li>
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Fuerza</span>
        </div>
        <span>${data[0].powerstats.strength}</span>
    </li>
    <li>
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Velocidad</span>
        </div>
        <span>${data[0].powerstats.speed}</span>
    </li>
    <li>
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Dureza</span>
        </div>
        <span>${data[0].powerstats.durability}</span>
    </li>
    <li>
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Poder</span>
        </div>
        <span>${data[0].powerstats.power}</span>
    </li>
    <li>
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Combate</span>
        </div>
        <span>${data[0].powerstats.combat}</span>
    </li>
    `;

  document.querySelector(".biography").innerHTML = `
    <li>
        <span>Nombre completo</span>
        <span>${data[0].biography["full-name"]}</span>
    </li>
    <li>
        <span>Alter Egos</span>
        <span>${data[0].biography["alter-egos"]}</span>
    </li>
    <li>
        <span>Alias</span>
        <span>${data[0].biography["aliases"]}</span>
    </li>
    <li>
        <span>Lugar de Nacimiento</span>
        <span>${data[0].biography["place-of-birth"]}</span>
    </li>
    <li>
        <span>Primera aparición</span>
        <span>${data[0].biography["first-appearance"]}</span>
    </li>
    <li>
        <span>Pertenece a</span>
        <span>${data[0].biography["publisher"]}</span>
    </li>
    `;

  document.querySelector(".appearance").innerHTML = `
    <li>
        <span>
            <i class="fas fa-star"></i>
            Género
        </span>
        <span>${data[0].appearance["gender"]}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>
            Raza
        </span>
        <span>${data[0].appearance["race"]}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>
            Altura
        </span>
        <span>${data[0].appearance["height"]}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>
            Peso
        </span>
        <span>${data[0].appearance["weight"]}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>
            Color de Ojos
        </span>
        <span>${data[0].appearance["eye-color"]}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>
            Color de Cabello
        </span>
        <span>${data[0].appearance["hair-color"]}</span>
    </li>
    `;

  document.querySelector(".connections").innerHTML = `
    <li>
        <span>Grupos</span>
        <span>${data[0].connections["group-affiliation"]}</span>
    </li>
    <li>
        <span>Relaciones</span>
        <span>${data[0].connections["relatives"]}</span>
    </li>    
    `;
};
