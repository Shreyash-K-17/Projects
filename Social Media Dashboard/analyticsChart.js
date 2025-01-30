// Render Analytics Charts Using Chart.js
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("analytics-chart").getContext("2d");

    const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Followers",
                data: [300, 450, 600, 800, 1000],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            {
                label: "Engagement Rate",
                data: [2.5, 3.0, 3.8, 4.2, 4.5],
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
            },
        ],
    };

    const config = {
        type: "line",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Social Media Analytics",
                },
            },
        },
    };

    new Chart(ctx, config);
});
