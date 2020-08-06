// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// var container = document.querySelector('.topics');

// axios.get("https://lambda-times-backend.herokuapp.com/topics")
// .then(response => {
//     console.log(response.data)
//    response.data.topics.forEach(topic => {
//         container.append(createTab(topic))
//     })

// })

// function createTab(obj) {
//     const div1 = document.createElement('div');

//     div1.classList.add('tab');

//     div1.textContent = obj.topics;

//     return div1;
// }

var containerb = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    // Remember response is an object, response.data is an array.
    //   console.log(response)
    for (var i = 0; i < response.data.topics.length; i++) {
      containerb.appendChild(createTab(response.data.topics[i]));
    }
  })
  .catch((error) => {
    console.log("Error:", err);
  });

  
function createTab(topic) {
  const div1 = document.createElement("div");
  div1.classList.add("tab");
  div1.textContent = topic;
  return div1;
}
