init();

async function init() {
  const workout = await API.getLastWorkout();

  if (workout) {
    const workoutDbId = workout._id;
    const workoutUrlId = location.search.split("=")[1];

    if (workoutUrlId === undefined) {
      //Use the db id if the url id is not present:
      location.search = `?id=${workoutDbId}`;
    } else {
      //Change the url id if it doesn't match the db id:
      if (workoutUrlId !== workoutDbId) {
        location.search = `?id=${workoutDbId}`;
      }
    }

  } else {
    //There are no workouts in the database, remove the id from the url if it exists:
    location.replace('/');
    //Remove continue button:
    document.querySelector("#continue-btn").classList.add("d-none");
  }

}