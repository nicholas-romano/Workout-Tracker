const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch(`/api/workouts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const lastWorkout = await this.getLastWorkout();

    if (lastWorkout) {

      const exercisesAmt = lastWorkout.exercises.length;

      //If the last workout is empty, delete it before adding another
      if (exercisesAmt === 0) {
        const id = lastWorkout._id;
        const workout = await this.deleteWorkout(id);
      }

    }

    //Create a new workout:
    const createRes = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await createRes.json();

    return json;

  },

  async deleteWorkout(id) {

    const res = await fetch(`/api/delete/${id}`, {
      method: "DELETE"
    });

    const json = await res.json();

    return json;

  },

  async deleteAllWorkouts() {
    const res = await fetch("/api/deleteAll", {
      method: "DELETE"
    });

    const json = await res.json();
    console.log("json: ", json);

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch("/api/workouts/range");
    const json = await res.json();
    return json;
  }
};
