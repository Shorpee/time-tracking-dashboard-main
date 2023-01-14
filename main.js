//an event listener for the DOM after it Loads
document.addEventListener("DOMContentLoaded", () => {

    //use Fetch API to get data from JSON file
  function fetchData() {
    fetch("./data.json")
    .then((response) => response.json())
    .then(data => displayTime(data))
    console.log(data[0].timeframes.daily.current + "hrs")
  }

  function displayTime (data) {
      

    //create DOM elements
    const workCurrent = document.getElementById("work-current");
    const workPrevious = document.getElementById("work-previous");
    const playCurrent = document.getElementById("play-current");
    const playPrevious = document.getElementById("play-previous");
    const studyCurrent = document.getElementById("study-current");
    const studyPrevious = document.getElementById("study-previous");
    const exerciseCurrent = document.getElementById("exercise-current");
    const exercisePrevious = document.getElementById("exercise-previous");
    const socialCurrent = document.getElementById("social-current");
    const socialPrevious = document.getElementById("social-previous");
    const selfCareCurrent = document.getElementById("self-care-current");
    const selfCarePrevious = document.getElementById("self-care-previous");

  }

      function displayDaily(){
      workCurrent.textContent = data[0].timeframes.daily.current + "hrs";
    }

    function displayWeekly(){

    }

    function displayMonthly(){
      
    }
  fetchData();
});
