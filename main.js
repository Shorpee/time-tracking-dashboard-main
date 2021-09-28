//an event listener for the DOM after it Loads
document.addEventListener("DOMContentLoaded", () => {

    //use Fetch API to get data from JSON file
  function fetchData() {
    fetch("./data.json")
    .then((response) => response.json())
    .then(data => displayTime(data))
  }

  function displayTime (data) {
      
  }
});
