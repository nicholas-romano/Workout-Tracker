# Workout-Tracker &middot; ![node](https://img.shields.io/badge/node-12.16.2-blue) ![express](https://img.shields.io/badge/express-4.16.3-blue) ![mongojs](https://img.shields.io/badge/mongojs-3.1.0-blue) ![mongoose](https://img.shields.io/badge/mongoose-5.3.16-blue) ![morgan](https://img.shields.io/badge/morgan-1.9.1-blue) ![path](https://img.shields.io/badge/path-0.12.7-blue) 

[https://myworkout-tracker.herokuapp.com/](https://myworkout-tracker.herokuapp.com/)

![Workout-Tracker](/images/Workout-Tracker.png) 

## Description 
Workout Tracker provides an interface for active people to enter and track their workouts from day to day and view their progress over time. 

## Table of Contents 
* [Installation](#installation) 
* [Usage](#usage) 
* [Third Party Contributors](#third-party-contributors) 
* [License](#license) 
* [Questions](#questions) 
 
## Installation 
1.  Install node: go to nodejs.org and download latest version and walk through the installation instructions  
2.  Go to project folder and enter: npm install express mongojs mongoose morgan path.  
3.  Run server on port 3000 by entering node server.js.  
 
## Usage 
1.  Enter your first workout by clicking the “New Workout” button. Clicking this button creates a new empty workout with an id automatically generated and assigned to it which appears in the URL.  
2.  You are then given the choice of selecting the workout type, either “Resistance” or “Cardio”.  ![Workout-Tracker-Select-Workout](/images/Workout-Tracker-Select-Workout.png)   
3.  When you select the “Resistance” option the following form displays: ![Workout-Tracker-Resistance-Form](/images/Workout-Tracker-Resistance-Form.png)  
4.  When you select the “Cardio” option, this form is displayed: ![Workout-Tracker-Cardio-Form](/images/Workout-Tracker-Cardio-Form.png) 
5.  Upon completion of the form, the bottom two buttons become enabled: “Complete”, and “Add Exercise”. When the “Complete” button is selected, a toaster notification displays on the right side that says: “Workout Added Successfully” and the page is then redirected to the home page which displays that workout you just added.  
6.  If the “Add Exercise” button is pressed, that exercise is added to the workout and the form is cleared, giving you the ability to enter another exercise for that workout. When you are redirected to the home page, you can then add more exercises to that workout by clicking the “Continue Workout” button, or create a new workout by clicking the “New Workout” button. ![Workout-Tracker-Last-Workout](/images/Workout-Tracker-Last-Workout.png)  
7.  When at least one workout has been entered, you can view the data from all workouts displayed in statistical charts on the Dashboard page. This page displays the total workout duration for each day in a line graph, the total pounds lifted each day in a bar graph, all of the individual workout durations in a pie chart (color-coded), and all of the resistance workouts in a doughnut chart (color-coded).
![Workout-Tracker](/images/Workout-Tracker.png) 
8.  At the bottom there is a “Clear All Data” button which deletes all workouts from the database and removes all of the charts from the page allowing the user to start over again if they need to. The Dashboard page will then look like this: ![Workout-Tracker-No-Workouts-Dashboard](/images/Workout-Tracker-No-Workouts-Dashboard.png) 
 

## Third Party Contributors 
Styling and layout was provided by the University of North Carolina Code Bootcamp. Backend database connection code and page routing was made by Nick Romano. 

## License 
There is not a license for this application. 

## Questions 
![GitHub Profile Image](https://avatars.githubusercontent.com/u/6642173?) 

 njr7romano@yahoo.com
