const events = [
    { id: 1, title: "Tech Conference 2024", category: "tech", date: "2024-03-15", popularity: 5 },
    { id: 2, title: "Business Summit", category: "business", date: "2024-04-20", popularity: 8 },
    // More events
];

function displayEvents(filter = "all", sortBy = "date") {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";

    let filteredEvents = events.filter(event => filter === "all" || event.category === filter);

    if (sortBy === "popularity") {
        filteredEvents.sort((a, b) => b.popularity - a.popularity);
    } else {
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    filteredEvents.forEach(event => {
        eventList.innerHTML += `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <button onclick="viewEvent(${event.id})">View Details</button>
            </div>
        `;
    });
}

function viewEvent(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}

document.getElementById("filter-category").addEventListener("change", (e) => {
    displayEvents(e.target.value, document.getElementById("sort-by").value);
});

document.getElementById("sort-by").addEventListener("change", (e) => {
    displayEvents(document.getElementById("filter-category").value, e.target.value);
});

displayEvents();
