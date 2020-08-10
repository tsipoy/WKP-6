const foods = [
    {
        id: 'ravitoto',
        price: 5000,
        title: 'Ravitoto',
        spicy: true,
        vegetarian: false,
    },
    {
        id: 'pasta',
        price: 4000,
        title: 'Pasta',
        spicy: true,
        vegetarian: true,
    },
    {
        id: 'burger',
        price: 5000,
        title: 'Burger',
        spicy: false,
        vegetarian: false,
    },
    {
        id: 'rice',
        price: 2000,
        title: 'Rice and Leaves',
        spicy: false,
        vegetarian: true,
    },
    {
        id: 'mofogasy',
        price: 500,
        title: 'Mofogasy',
        spicy: false,
        vegetarian: false,
    },
];

// Grab all elements we need
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');
const confirmOrder = document.querySelector('.confirm-button');
const form = document.querySelector('form');
const card = document.querySelector('.card');
const foodList = document.querySelector('.food-list');
const spicyOrder = document.querySelector('#spicy-list');
const VegetarianOrder = document.querySelector('#vegetarian-list');
const recipeList = document.querySelector('.recipe');
const orderList = document.querySelector('.order');


const handleSubmit = e => {
    e.preventDefault();
    const title = e.currentTarget.spicy.value;
    if (!title) return;

    const spicy = {
        id: 'ravitoto',
        price: 5000,
        title: 'Ravitoto',
        spicy: true,
        vegetarian: false,
    };
    food.push(spicy);
    console.info(`There are now ${foods.length} item in your state`);
    e.target.reset();
    // we crete our own event called "itemsUpdated"
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
};

const displayListFood = (arr) => {
    return arr.map(food => {
        const foodListHtml = `
        <div class="recipe">
            <ul>
                <li>${food.title}</li>
                <li>${food.price}</li>
                <li><button class="add-button">Add</button></li>
            </ul>
        </div>
    `;
        recipeList.insertAdjacentHTML('afterbegin', foodListHtml);
    });
};
displayListFood(foods);

const addFoods = (arr) => {
    const addHtml = `
    <div class="order">
    <li>${arr.title}</li>
    <li>${arr.map(price => price * 2)}</li>
    </div>
    `;
    orderList.innerHTML = addHtml;
}

// Open modal
console.log(outerModal);
const openModal = event => {
    event.preventDefault();
    outerModal.classList.add('open');
        const myNewHtml = `
	    	<div class="newRecipe">
                <h2>Thank you!</h2>
                <p>Your order is confirmed. We will prepare your food, and deliver it to you when it's ready</p>
                <p>The total amount is 20000 Ar.</p>
                <button class="close-button">Close</button>
	    	</div>
	    `;
        innerModal.innerHTML = myNewHtml;
};

// Close modal
const closeModal = event => {
	const isOutside = !event.target.closest('.inner-modal');
	if (isOutside) {
		outerModal.classList.remove('open');
	}
};

// Escape modal
const escapeModal = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
}

confirmOrder.addEventListener('click', openModal);
outerModal.addEventListener('click', closeModal);
window.addEventListener('keydown', escapeModal);

