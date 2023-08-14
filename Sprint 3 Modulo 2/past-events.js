const datos = {
    eventos: [
      {
        nombre: 'Collectivities Party',
        fecha: '2022-12-12'
      },
      {
        nombre: 'Jurassic Park',
        fecha: '2022-11-02'
      },
      {
        nombre: 'Comicon',
        fecha: '2022-02-12'
      },
      {
        nombre: 'Electronic Fest',
        fecha: '2022-01-22'
      },
      {
        nombre: '10K for life',
        fecha: '2022-03-01'
      },
      {
        nombre: 'Just for your kitchen',
        fecha: '2022-11-09'
      },
      {
        nombre: 'Batman',
        fecha: '2022-3-11'
      },
      
    ]
  };
  console.log(datos.eventos);

  let container = document.getElementById("checkbox");

for (let i = 1; i <= 7; i++) {

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox" + i;
  checkbox.name = "checkbox" + i;
  checkbox.value = "true";
  
  let label = document.createElement("label");
  label.htmlFor = "checkbox" + i;
  label.appendChild(document.createTextNode("Categorias"));

  container.appendChild(checkbox);
  container.appendChild(label);
}

//input de busqueda//
let contenedor = document.getElementById("contenedorBusqueda");

  let searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.id = "mySearchInput";
  searchInput.placeholder = "Buscar...";

  container.appendChild(searchInput);
