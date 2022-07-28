// getting IDs and assigning them to variables 
const submitBtn = document.getElementById('submitButton'); 
const input = document.getElementById('itemInput'); 
const shoppingList = document.getElementById('shoppingList'); 
const clearListButton = document.getElementById('clearListButton');

// add items to shopping list
submitBtn.addEventListener('click', () => {
    const newItem = document.createElement('li'); 
    newItem.textContent = input.value; 
    shoppingList.appendChild(newItem);
    input.value = ""; 
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        const newItem = document.createElement('li'); 
        newItem.textContent = input.value; 
        shoppingList.appendChild(newItem);
        input.value = ""; 
    }
})

// clear shopping list 
clearListButton.addEventListener('click', () => {
  shoppingList.innerHTML = "";   
})

shoppingList.addEventListener('click', (e) => {
    e.target.classList.toggle('done'); 
})

shoppingList.addEventListener('mouseover', () => {

})
shoppingList.addEventListener('mouseout', () => {

})