const currentDate = nuevaFecha();
const obtenerAñoCompleto = fechaActual.getFullYear();
const obtenerMes = fechaActual.getMonth() + 1;
const obtenerDia = fechaActual.getDate();
const fechaActual = `${obtenerAñoCompleto}-${obtenerMes}-${obtenerDia}`;

function filtrarEventosPorFecha(eventos, pagina) {
    if (pagina === "Home") {
      return eventos;
    } else if (pagina === "past-events") {
      return eventos.filter(event => event.date < formatoFechaActual);
    } else if (pagina === "Upcoming-events") {
      return eventos.filter(event => event.date > formatoFechaActual);
    }
  }

  const filtrarEventos = filtrarEventosPorFecha(eventsData, "past-events");

  filtrarEventos.forEach(event => {

  });