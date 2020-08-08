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

const displayListFood = () => {
        const foodListHtml = foods.map(food => `
        <div class="recipe">
            <ul>
                <li>${food.titile}</li>
                <li>${food.price}</li>
            </ul>
            <button class="add-button">Add</button>
        </div>
    `)
    recipeList.innerHTML = foodListHtml;
    displayListFood();
};

const openModal = (event) => {
	outerModal.classList.add('open');
	const myNewHtml = `
		<div class="newRecipe">
            <h2>Thank you!</h2>
            <p>Your order is confirmed. We will prepare your food, and deliver it to you when it's ready</p>
            <p>The total amount is 20000 Ar.</p>
            <button>Close</button>
		</div>
	`;
	innerModal.innerHTML = myNewHtml;
};

confirmOrder.addEventListener('click', openModal);

