let recetas = [
    {
        "id" : 1,
        "nombre" : "Sopa de Calabaza",
        "ingredientes": "Calabaza mediana, pelada y cortada en cubos - 1kg, Cebolla grande picada- 1u, Caldo de verduras - 1l, Crema de leche - 200ml (opcional), Aceite de oliva - 2c, Sal, Pimienta",
        "porciones": 4,
        "tiempoCoccion": 45,
        "imagen": "img/sopacalabaza.jpg",
        "preparacion" : "1. En una olla grande, calienta el aceite de oliva a fuego medio. " + 
        "2. Añadir la cebolla picada y cocinar hasta que esté transparente, unos 5 minutos. " +
        "3. Incorporar la calabaza en cubos a la olla y remover bien. " + 
        "4. Vertir el caldo de verduras hasta cubrir la calabaza y llevar a ebullición. " +
        "5. Disminuir el fuego y dejar cocinar a fuego lento durante unos 25 minutos o hasta que la calabaza esté tierna. " + 
        "6. Retirar la olla del fuego y, con una licuadora de mano o una licuadora normal, procesar la sopa hasta obtener una textura suave y homogénea. " + 
        "7. Ajusta la sal y pimienta. " +
        "8. Servir caliente y decorar con un poco de crema de leche o semillas de calabaza tostadas si lo desea. "
    },

    {
        "id": 2,
        "nombre" : "Arepas Venezolanas",
        "ingredientes": "Para las arepas: Harina de maíz blanca precocida - 300g, Sal - 10g, Agua - 500ml, Manteca - 10g.  "+
        "Para el relleno: Aceite de oliva - 1c, Cebolla - 1/2, Pechugas de pollo en filetes finos - 150g, Sal, Pimienta, Palta - 1u, Mayonesa - 1c.",
        "porciones": 8,
        "tiempoCoccion": 30,
        "imagen": "img/arepas.jpg",
        "preparacion" : "1. Para hacer la masa de las arepas ponemos en un bol 300 g de harina de maíz blanca precocida junto con 10 g de sal. " + 
        "2. Añadimos 500 ml de agua a temperatura ambiente. Derretimos durante unos segundos en el microondas 10 g de manteca y la añadimos al bol. " +
        "3. Trabajamos la masa hasta que quede un poco pegajosa, pero se pueda desprender del bol con facilidad. " + 
        "4. Hacemos 8 porciones de 100 g de masa, les damos forma de bola y nos ayudamos con las palmas de las manos para aplastarlas y darles finalmente una forma plana. " +
        "5. Podemos cocinar las arepas directamente sobre una sartén caliente, aunque si queremos asegurarnos de que no se peguen, untaremos ligeramente la sartén con un poco de manteca. Cuando la sartén esté caliente, cocinamos las arepas a fuego lento entre 5 y 7 minutos por cada lado, hasta que queden doradas, crujientes y cocinadas por dentro. " +
        "6. Una vez cocinadas todas las arepas, las reservamos hasta que vayamos a rellenarlas. " +
        "7. Para el relleno, ponemos 1 cucharada de aceite de oliva en una sartén y salteamos a fuego medio-alto ½ cebolla cortada en juliana con 150 g de filetes de pechuga de pollo que habremos cortado en tiras. Añadimos sal y pimienta. " + 
        "8. Llevamos a un bol el salteado de pollo y cebolla, y le añadimos 1 aguacate y 1 cucharada de mayonesa. " +
        "9. Mezclamos todos los ingredientes del relleno y lo reservamos. " +
        "10. Rellenamos las arepas haciendo un corte por la mitad de cada una sin llegar al final y las servimos recién hechas. ",
    },

    {
        "id": 3, 
        "nombre" : "Pollo Karahi",
        "ingredientes": "Pechuga de pollo deshuesada - 750g, Tomates triturados - 1kg, Cebolla roja grande - 1u, Dientes de ajo - 3u, Jengibre fresco - 1 trozo, Copos de chile rojo - 3ctas, Garam masala - 1c, Cilantro molido - 1cta, Comino molido - 1cta, Cúrcuma molida - 1cta, Ghee derretido - 6c (o aceite vegetal), Agua hirviendo - 1/2 taza, Sal, Hojas de cilantro picadas - 3c, Pimientos verdes picantes - 2u, Zumo de limón.",
        "porciones": 8,
        "tiempoCoccion": 40,
        "imagen": "img/pollo.jpg",
        "preparacion" : "1. Calentar el ghee (o aceite) en una sartén de hierro fundido o karahi a fuego medio. " +
        "2. Añadir la cebolla y saltear hasta que empiece a dorarse. " + 
        "3. Añadir el jengibre y el ajo, mezclar y saltear durante 1 minuto, removiendo constantemente. " +
        "4. Añadir el pollo a la sartén y saltear hasta que se vuelva blanco. " +
        "5. Añadir todas las especias: copos de pimienta roja, cilantro en polvo, garam masala, comino y cúrcuma y saltear a fuego medio-alto durante 30 segundos, removiendo constantemente. " + 
        "6. Añadir inmediatamente el agua hirviendo para evitar que las especias se quemen, mezclar y luego añadir los tomates triturados. " +
        "7. Cocer a fuego lento o medio durante unos 25 minutos. " + 
        "Si el pollo aún no está tierno, añadir 2 ó 3 cucharadas de agua hirviendo y cocinar 5 minutos más, removiendo regularmente. " + 
        "8. Servir inmediatamente y decorar con pimientos verdes picantes, cilantro picado y un poco de zumo de limón. "
    },

    {
        "id": 4, 
        "nombre" : "Tallarines con Salsa de Tomate",
        "ingredientes": "Tallarines - 400g, Cebolla picada - 1u, Dientes de ajo picados - 1u, Aceite de oliva - 2c, Tomate triturado - 800g, Sal, Pimienta, Orégano.",
        "porciones": 4,
        "tiempoCoccion": 40,
        "imagen": "img/tallarines.jpg",
        "preparacion" : "1. Cocinar los tallarines en una olla con abundante agua hirviendo y sal. " +
        "2. Cuando estén al dente, escurrirlos y reservarlos. " +
        "3. En una sartén grande, calentar el aceite de oliva y fritar la cebolla y el ajo a fuego medio-bajo hasta que estén blandos y transparentes, unos 15 minutos. " +
        "4. Añadir el tomate triturado, con sal y pimienta a gusto. Añadir también un poco de orégano si te gusta. Dejar que la salsa se cocine a fuego medio-alto hasta que espese un poco, unos 10 minutos más. " +
        "5. Añadir la salsa de tomate a los tallarines y remover, o si lo prefieres emplátalo colocando una ración de tallarines y añadiendo 2 o 3 cucharas de la salsa de tomate por encima. Servir caliente. "
    },
    
]

for (let i = 0; i < recetas.length; i++){
    console.log("Nombre de receta: ", recetas[i].nombre);
}

let contenedorRecetas = document.getElementById('recetas');

let contenedorIndividual = document.createElement('div');

contenedorIndividual.classList.add('card-container');


document.addEventListener("DOMContentLoaded", (event) => {
  recetas.forEach(receta => {
    contenedorIndividual.innerHTML += `
      <div class="card">
       <img src="${receta.imagen}" alt="${receta.nombre}" class="card-img">
       <form id="my_form${receta.id}">
        <div class="card-content">
          <h5 id="nombre" name="nombre" class="card-title"> ${receta.nombre}</h5>
          <h5 id="ingredientes" class="card-title2"> Ingredientes: </h5>
          <p id="ingredientes" class="card-text"> ${receta.ingredientes} </p>
          <h5 id="porciones" name="porciones" class="card-title2"> Porciones: ${receta.porciones} </h5> 
          <h5 id="tiempoCoccion" name="tiempoCoccion" class="card-title2"> Tiempo de cocción: ${receta.tiempoCoccion} min.</h5>
          <button id="btnVerPrep${receta.id}" class="btnVerPrep" onclick="mostrarPrep(${receta.id})"> Ver preparación </button>
          <div id="preparacion${receta.id}" class="preparacion" style="display: none;">
              <h5 id="preparacion" class="card-title2"> Preparación:</h5>
              <p id="preparacion" class="card-text">${receta.preparacion}</p>
           </div>
          <h5 id="botonera${receta.id}">
            <button onclick="añadirFav(${receta.id})" class="btnFav" value="Añadir">Añadir a favoritos</button>
         </h5> 
        </div>
      </div>

    `;
    contenedorRecetas.append(contenedorIndividual);
  });
});


function mostrarPrep(id) {
  event.preventDefault();
  let idz = id.toString();

  let param = 'preparacion' + idz;
  let btnVerPrep = 'botonera' + idz;
  let btnFav = 'btnVerPrep' + idz;

  //ocultamos o mostramos los elementos
  document.getElementById(param).style.display = "block";
  document.getElementById(btnFav).style.display = "none";
}


function añadirFav(id) {
  let idz= id.toString();
  let param= 'my_form' + idz;
  let form = document.getElementById(param);

  console.info('Tipo ' + typeof form);

  let nombre = form.elements['nombre'].value;
  let porciones = form.elements['porciones'].value;
  let tiempoCoccion = form.elements['tiempoCoccion'].value;

  console.log("Nombre: " + nombre);
  console.log("Porciones: " + porciones);
  console.log("Tiempo de cocción: " + tiempoCoccion);

  let itemFav = {
    "id": idz,
    "nombre" : nombre,
    "porciones" : porciones,
    "tiempoCoccion" : tiempoCoccion,
  }

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(itemFav.id, JSON.stringify(itemFav));
  } 
  
  return false;
}


let lista = document.getElementById("listaFavoritos");
Object.keys(localStorage).forEach(function(key){
  lista.innerHTML += localStorage.getItem(key);
});