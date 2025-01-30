function addEvent(title, category, date) {
    events.push({ id: events.length + 1, title, category, date, popularity: 0 });
    alert("Event added successfully!");
}

function deleteEvent(eventId) {
    const index = events.findIndex(event => event.id === eventId);
    if (index !== -1) {
        events.splice(index, 1);
        alert("Event deleted successfully!");
    }
}
