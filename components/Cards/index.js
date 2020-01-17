// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data) {
    //create element
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');

    //set up the structure
    card.append(headline);
    card.append(author);
    author.append(imageContainer);
    imageContainer.append(image);
    author.append(name);
    
    //add classes to elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    image.classList.add('img');
    name.classList.add('span');

    // //set text content
    headline.textContent = data.headline;
    author.textContent = data.authorName;
    image.src = data.authorPhoto;
    // image.src = data.authorPhoto;
    name.textContent = data.authorName;

    return card;
}

const entryPoint = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
   Object.values(response.data.articles).forEach(article => {
       article.forEach(x => {
           console.log(article)
           entryPoint.appendChild(createCard(x))
       })
   })
})
.catch(error => {
    console.log('The data was not returned', error)
})
