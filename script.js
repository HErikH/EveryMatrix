window.onload = function () {
  let count = 0;
  let sidebar = document.getElementById("sidebar");
  let sidebar_button = document.getElementById("sidebar-collapse");
  let collapse_icon = document.getElementById("collapse-icon");
  let collapse_icon_left = document.getElementById("collapse-icon-left");
  sidebar_button.onclick = function () {
    if (count == 0) {
      collapse_icon.style.display = "none";
      collapse_icon_left.style.display = "initial";
      sidebar_button.style.marginLeft = "0rem";
      sidebar.style.marginLeft = "-3rem";
      count++;
    } else if (count == 1) {
      collapse_icon.style.display = "initial";
      collapse_icon_left.style.display = "none";
      sidebar_button.style.marginLeft = "3rem";
      sidebar.style.marginLeft = "0rem";
      count = 0;
    }
  };
  //   Graphs
  //   Line Graph
  const line__graph = document.getElementById("line").getContext("2d");
  const chart1 = new Chart(line__graph, {
    type: "line",
    data: {
      labels: ["", "", "", "", "", "", ""],
      datasets: [
        {
          label: "Clicks",
          data: [40, 50, 0, -40, -20, 40, 55],
          backgroundColor: ["#00acac"],
          borderColor: ["#00acac"],
          borderWidth: 5,
          tension: 0.4,
        },
        {
          label: "Page View",
          data: [20, 55, 20, -30, -30, 20, 55],
          backgroundColor: ["#e5be69"],
          borderColor: ["#e5be69"],
          borderWidth: 5,
          tension: 0.4,
        },
        {
          label: "Sign ups",
          data: [-40, 20, 55, 20, -40, -20, 20],
          backgroundColor: ["#226793"],
          borderColor: ["#226793"],
          borderWidth: 5,
          tension: 0.4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Medias Staats",
          position: "top",
          align: "start",
          color: "#ffffff",
          font: {
            size: 21,
          },
        },
        legend: {
          position: "bottom",
          align: "end",
          labels: {
            boxWidth: 10,
            boxHeight: 10,
            color: "#c0c0c0",
          },
        },
      },
      scales: {
        y: {
          max: 60,
          min: -60,
          beginAtZero: true,
          color: "red",
          ticks: {
            color: "#ffffff",
          },
        },
      },
    },
  });
  //   Doughnut Graph
  const doughnut__graph = document.getElementById("doughnut").getContext("2d");
  const chart2 = new Chart(doughnut__graph, {
    type: "doughnut",
    data: {
      labels: ["Total Clicks", "Signups", "Total Views"],
      datasets: [
        {
          data: [60, 50, 90],
          backgroundColor: ["#1f7bb6", "#01aaaa", "#fbcf71"],
          borderColor: ["transparent"],
        },
      ],
    },
    options: {
      radius: 70,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};
