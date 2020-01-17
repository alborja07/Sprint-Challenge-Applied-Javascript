// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function topicsList (obj){
    const tab = document.createElement('div');
    const topics1 = document.createElement('ul');
    // const topic1 = document.createElement('li');
    // const topic2 = document.createElement('li');
    // const topic3 = document.createElement('li');
    // const topic4 = document.createElement('li');
    // const topic5 = document.createElement('li');

    tab.append(topics1);
    // topics.append(topic1);
    // topics.append(topic2);
    // topics.append(topic3);
    // topics.append(topic4);
    // topics.append(topic5);

    // obj.forEach(item => {
    //     const li = document.createElement('li');
    //     li.textContent = item;
    //     topics1.append(li);
    // })

    tab.classList.add('tabs');
    topics1.classList.add('topics');
    // topic1.classList.add('tab');
    // topic2.classList.add('tab');
    // topic3.classList.add('tab');
    // topic4.classList.add('tab');
    // topic5.classList.add('tab');

    // topics.textContent = "Topics";
    topics1.textContent = obj.topics;
    // topic2.textContent = data.topics[1];
    // topic1.textContent = data.topics[0];
    // topic1.textContent = data.topics[0];
    // topic1.textContent = data.topics[0]; 

    return tab;
}

tabList = document.querySelector('.topics');
console.log(tabList)

// for (var i = 0; i < topics.length; i++){
    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log(response.data);
               tabList.append(topicsList(response.data))
    })

.catch(error => {
    console.log('The data was not returned', error)
})
