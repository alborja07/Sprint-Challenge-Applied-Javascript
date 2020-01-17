// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function topics (obj){
    const tab = document.createElement('div');
    const topics = document.createElement('ul');
    const topic1 = document.createElement('li');
    const topic2 = document.createElement('li');
    const topic3 = document.createElement('li');
    const topic4 = document.createElement('li');
    const topic5 = document.createElement('li');

    tab.append(topics);
    topics.append(topic1);
    topics.append(topic2);
    topics.append(topic3);
    topics.append(topic4);
    topics.append(topic5);

    tab.classList.add('tabs');
    topics.classList.add('topics');
    topic1.classList.add(tab);
    topic2.classList.add(tab);
    topic3.classList.add(tab);
    topic4.classList.add(tab);
    topic5.classList.add(tab);

    topics.textContent = "Topics";
    topic1.textContent = topics[0];
    topic2.textContent = topics[0];
    topic1.textContent = topics[0];
    topic1.textContent = topics[0];
    topic1.textContent = topics[0]; 

    return tab;
}

tabList = document.querySelector('.title');

for (var i = 0; i < topics.length; i++){
    axios.get('https://lambda-times-backend.herokuapp.com/topics' + topics[i])
    .then(response => {
        console.log(response);
    })
}
