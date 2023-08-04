let currentDate = new Date("2023-01-01");


let pastEvents = eventsData.filter((event) => {
  let eventDate = new Date(event.date);
  return eventDate < currentDate;
}).slice0, 7); 


let upcomingEvents = eventsData.filter((event) => {
  let eventDate = new Date(event.date);
  return eventDate >= currentDate;
}).slice(0, 7);