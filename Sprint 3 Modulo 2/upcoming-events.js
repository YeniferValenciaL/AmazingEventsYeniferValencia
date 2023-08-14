const datos = {
    eventos: [
      {
        nombre: 'Korean style',
        fecha: '2023-08-12'
      },
      {
        nombre: 'Parisian Museum',
        fecha: '2023-11-02'
      },
      {
        nombre: 'Halloween Night',
        fecha: '2023-02-12'
      },
      {
        nombre: 'Metallica in concert',
        fecha: '2023-01-22'
      },
      {
        nombre: '15K NY',
        fecha: '2023-03-01'
      },
      {
        nombre: 'School book fair',
        fecha: '2023-10-15'
      },
      {
        nombre: 'Avengers',
        fecha: '2023-10-15'
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