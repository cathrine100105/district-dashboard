// THEME TOGGLE
function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  createRankingChart(isDark);
}

Chart.register(ChartDataLabels);

// COURSE BAR CHART
new Chart(document.getElementById("courseChart"), {
  type: "bar",
  data: {
    labels: ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri"],
    datasets: [
      {
        label: "Below",
        data: [40, 35, 30, 28, 25],
        backgroundColor: "#EC7063"
      },
      {
        label: "Average",
        data: [55, 60, 68, 45, 50],
        backgroundColor: "#1ABC9C"
      },
      {
        label: "Good",
        data: [70, 75, 80, 60, 72],
        backgroundColor: "#5DADE2"
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value + "%"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Course Progress (%)"
        }
      },
      x: {
        title: {
          display: true,
          text: "Districts"
        }
      }
    }
  }
});

// PASS CHART
new Chart(document.getElementById("passChart"), {
  type: "bar",
  data: {
    labels: ["Overall Learners", "Assessment Taken", "Passed", "Failed"],
    datasets: [{
      data: [22500, 18563, 13500, 5063],
      backgroundColor: [
        "#5DADE2",
        "#48C9B0",
        "#1ABC9C",
        "#EC7063"
      ]
    }]
  },
  options: {
    indexAxis: "y",
    plugins: {
  legend: {
    display: false
  },
  datalabels: {
    display: true,
    labels: {

      // INSIDE BAR → Percentage
      percent: {
        formatter: function(value, context) {
          const total = context.chart.data.datasets[0].data[0];
          const percentage = ((value / total) * 100).toFixed(1);
          return percentage + "%";
        },
        color: "#ffffff",
        anchor: "center",
        align: "center",
        font: {
          weight: "bold",
          size: 12
        }
      },

      // OUTSIDE BAR → Actual Value
      value: {
        formatter: function(value) {
          return value.toLocaleString();
        },
        color: document.body.classList.contains("dark") ? "#ffffff" : "#000000",
        anchor: "end",
        align: "right",
        offset: 5,
        font: {
          weight: "bold",
          size: 12
        }
      }

    }
  }
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Pass Percentage"
        }
      },
      y: {
        title: {
          display: true,
          text: "Performance"
        }
      }
    }
  }
});
// DONUT CHART
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["Assessment Completed", "Assessment Not Completed"],
    datasets: [{
      data: [68, 32],
      backgroundColor: ["#5DADE2", "#F5B041"],
      borderWidth: 0
    }]
  },
  options: {
    cutout: "70%",
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
        usePointStyle: true,
        pointStyle: "circle"
    }
  },
      datalabels: {
        formatter: (value) => value + "%",
        color: "#000",
        font: { weight: "bold", size: 14 }
      }
      
    }
  }
}

);

// PIE CHART
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: [
      "A - Grade (>80)",
      "B - Grade (>60)",
      "C - Grade (>50)",
      "D - Grade (>30)",
      "E - Grade (0)"
    ],
    datasets: [{
      data: [48, 32, 35, 13, 12],
      backgroundColor: [
        "#5DADE2",
        "#1ABC9C",
        "#F5B041",
        "#EC7063",
        "#D5DBDB"
      ],
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
      datalabels: {
        formatter: (value) => value + "%",
        color: "#fff",
        font: {
          weight: "bold",
          size: 14
        }
      }
    }
  }
});


// DISTRICT RANKING CHART WITH DARK MODE SUPPORT

let rankingChart;

function createRankingChart(isDark = false) {

  const textColor = isDark ? "#ffffff" : "#000000";
  const gridColor = isDark ? "#444" : "#e0e0e0";

  if (rankingChart) {
    rankingChart.destroy();
  }

  rankingChart = new Chart(document.getElementById("rankingChart"), {
    type: "bar",
    data: {
      labels: [
        "Ariyalur",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Erode",
        "Karur",
        "Madurai"
      ],
      datasets: [
        {
          label: "Male",
          data: [12000, 15000, 14000, 13000, 12500, 11000, 9500, 9000],
          backgroundColor: "#5DADE2",
          yAxisID: "y"
        },
        {
          label: "Female",
          data: [10000, 13000, 12000, 11000, 10000, 9000, 8000, 7500],
          backgroundColor: "#101667",
          yAxisID: "y"
        },
        {
          label: "Others",
          data: [500, 600, 550, 520, 480, 450, 400, 350],
          backgroundColor: "#BB8FCE",
          yAxisID: "y"
        },
        {
          label: "Passed %",
          data: [70, 75, 72, 68, 65, 60, 58, 55],
          backgroundColor: "#1ABC9C",
          yAxisID: "y1"
        },
        {
          label: "Assessment Completed %",
          data: [80, 85, 82, 78, 75, 72, 70, 68],
          backgroundColor: "#F5B041",
          yAxisID: "y1"
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: {
            color: textColor,
            usePointStyle: true,
            pointStyle: "circle"
          }
        },
        datalabels: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: { color: textColor },
          grid: { color: gridColor },
          title: {
            display: true,
            text: "Top Districts",
            color: textColor
          }
        },
        y: {
          position: "left",
          beginAtZero: true,
          ticks: { color: textColor },
          grid: { color: gridColor },
          title: {
            display: true,
            text: "Number of Users",
            color: textColor
          }
        },
        y1: {
          position: "right",
          beginAtZero: true,
          max: 100,
          ticks: { color: textColor },
          grid: {
            drawOnChartArea: false
          },
          title: {
            display: true,
            text: "Pass / Completion %",
            color: textColor
          }
        }
      }
    }
  });
}

// Create initially (light mode)
createRankingChart(false);