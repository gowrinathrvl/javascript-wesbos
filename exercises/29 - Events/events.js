const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick(){
    console.log(' It got Clicked!!');
}

const hoorey = () => console.log('HOOREY!!');

//Adding event listener to butts
butts.addEventListener('click', handleClick);

//removing event listener to butts
// butts.removeEventListener('click', handleClick);

//Adding event listener to coolButtons
coolButton.addEventListener('click', hoorey);

//removing event listener to coolButtons
// coolButton.removeEventListener('click', hoorey);

//Listen to multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function buyItems(){
// console.log('Buying Item');
// // }

// buyButtons.forEach(function( buyButton){
//  console.log("binding the buy button");
// //  buyButton.addEventListener('click', buyItems);
// })

// buyButtons.forEach((button) =>{
//     button.addEventListener('click', () =>{
//         console.log('You clicked IT');
//     })
// })





//Listen to multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event){
    console.log('You are buying it!!!');
    console.log(event.target.dataset.price );
}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
})