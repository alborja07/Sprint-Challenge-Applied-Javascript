// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// function Header(date, heading, temp) {
//     const panel = document.createElement('div');
//     const date1 = document.createElement('span');
//     const heading1 = document.createElement('h1');
//     const temp1 = document.createElement('span');

//     panel.append(date);
//     panel.append(heading);
//     panel.append(temp);

//     panel.classList.add('header');
//     heading1.classList.add('h1');
//     date1.classList.add('date');
//     temp1.classList.add('temp');

//     date1.textContent = 'January 17, 2020';
//     heading1.textContent= 'Lambda Times';
//     temp1.classList = '44 F';
    
//     return panel;
// }

// const head = document.querySelector('.header-container');

// head.append(Header(date, heading, temp))
