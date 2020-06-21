// get all workout data from back-end
fetch("/api/workouts/range")
  .then(response => {
    return response.json();
  })
  .then(data => {
    if (data.length > 0) {
      $('#clear-all-workouts').show();
      $('#no-data-message').remove();
      const chartTotals = getChartTotalData(data);
      populateChart(data, chartTotals);
    } else {
      $('#clear-all-workouts').hide();
      $('h1').after('<p id="no-data-message">You have not yet added any workouts.</p>')
    }
  });


API.getWorkoutsInRange()

  function generatePalette() {
    const arr = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600"
  ]

  return arr;
  }
function populateChart(data, chartTotals) {
  const days = chartTotals[0];
  const totalDuration = chartTotals[1];
  const totalPounds = chartTotals[2];

  console.log("days: ", days);
  console.log("totalDuration: ", totalDuration);
  console.log("totalPounds: ", totalPounds);

  let durations = getExcerciseInfo(data, 'duration');
  console.log("durations: ", durations);

  resistance_workouts = getResistanceWorkoutsInfo(data, 'name');

  let pounds = getResistanceWorkoutsInfo(data, 'weight');
  console.log("pounds: ", pounds);

  let workouts = getExcerciseInfo(data, 'name');
  console.log("workouts: ", workouts);

  const colors = generatePalette();

  let line = document.querySelector("#canvas").getContext("2d");
  let bar = document.querySelector("#canvas2").getContext("2d");
  let pie = document.querySelector("#canvas3").getContext("2d");
  let pie2 = document.querySelector("#canvas4").getContext("2d");

  let lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: days,
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "red",
          borderColor: "red",
          data: totalDuration,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Total Workout Duration each day"
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: "Pounds",
          data: totalPounds,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Total Workout Pounds Lifted each day"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  let pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "All Excercises Total Duration in minutes",
          backgroundColor: colors,
          data: durations
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "All Excercises Total Duration in minutes"
      }
    }
  });

  let donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: resistance_workouts,
      datasets: [
        {
          label: "Resistance Exercises Total Pounds",
          backgroundColor: colors,
          data: pounds
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Resistance Exercises Total Pounds"
      }
    }
  });
}

const getChartTotalData = data => {
  console.log("data: ", data);
  let days = [];
  let totalDuration = [];
  let totalPounds = [];

    $('#clear-all-workouts').show();

    const firstDayTimestamp = data[0].day;

    let currentDay = formatDate(firstDayTimestamp);

    let dayCount = 1;

    days.push(dayCount);

    let totalDurationAmt = 0;
    let totalPoundsAmt = 0;

    data.forEach(workout => {

      const timestamp = workout.day;
  
      const formattedDate = formatDate(timestamp);
  
      if (formattedDate !== currentDay) {

        dayCount += 1;
        days.push(dayCount);
        totalDuration.push(totalDurationAmt);
        totalPounds.push(totalPoundsAmt);

        totalDurationAmt = 0;
        totalPoundsAmt = 0;

        totalDurationAmt += workout.totalDuration;
        totalPoundsAmt += workout.totalPounds;

        currentDay = formattedDate;

      } else {

        totalDurationAmt += workout.totalDuration;
        totalPoundsAmt += workout.totalPounds;

      }
  
    });

    totalDuration.push(totalDurationAmt);
    totalPounds.push(totalPoundsAmt);

    return [days, totalDuration, totalPounds];

  
}

const formatDate = date => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(options);
};

const clearData = () => {
  const clearData = confirm("Are you sure you want to delete all workouts?");
  if (clearData) {
    $('#clear-all-workouts').hide();
    API.deleteAllWorkouts();
    location.reload();
  }
}

const getExcerciseInfo = (data, type) => {
  let info = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      if (exercise[type] !== undefined) {
        info.push(exercise[type]);
      }
    });
  });

  return info;

} 

const getResistanceWorkoutsInfo = (data, type) => {

  let resistance_workouts = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      if (exercise.type === "resistance") {
        resistance_workouts.push(exercise[type]);
      }
    });
  });

  return resistance_workouts;

}