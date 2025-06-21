// Menu data structure
const menuData = [
    {
        category: "Burger",
        items: [
            { name: "Student Burger", price: "79/-" },
            { name: "Chicken Burger", price: "99/-" },
            { name: "Mexican Burger", price: "119/-" },
            { name: "Naga Burger", price: "149/-" },
            { name: "BBQ Burger", price: "169/-" },
            { name: "Chese Burger", price: "219/-" },
        ],
    },
    {
        category: "Appetizers",
        items: [
            { name: "Ma'sala Potato Wedges (8pcs)", price: "99/-" },
            { name: "French Fries", price: "99/-" },
            { name: "French Fries Loaded", price: "139/-" },
            { name: "Onthon (6pcs)", price: "139/-" },
        ],
    },
    {
        category: "Fries",
        items: [
            { name: "Chicken Fry", price: "89/-" },
            { name: "Thai Chicken", price: "99/-" },
            { name: "Naga Chicken", price: "149/-" },
            { name: "Chicken Wings (4pcs)", price: "159/-" },
            { name: "BBQ Chicken Wings (4pcs)", price: "169/-" },
        ],
    },
    {
        category: "Meat Box",
        items: [
            { name: "Regular Meat Box", price: "149/-" },
            { name: "Mexican Meat Box", price: "179/-" },
            { name: "Chicken Sausage Meat Box", price: "189/-" },
            { name: "Mix Meat Box", price: "209/-" },
        ],
    },
    {
        category: "Pasta",
        items: [
            { name: "Spicy Chicken pasta", price: "169/-" },
            { name: "Cheese Chicken pasta", price: "189/-" },
            { name: "Red pasta", price: "189/-" },
            { name: "Oven Backed White Sauce Pasta", price: "249/-" },
        ],
    },
    {
        category: "Chawmin",
        items: [
            { name: "Egg Chowmin", price: "119/-" },
            { name: "Chicken Chowmin", price: "159/-" },
            { name: "Beef Chawmin", price: "199/-" },
            { name: "Chicken Pon fish Chowmin", price: "229/-" },
        ],
    },
    {
        category: "Rice",
        items: [
            { name: "Rice, Chicken Leg ps, Vegetable, Salad", price: "199/-" },
            { name: "Rice, Chicken Care, Vegetable Salad", price: "209/-" },
            { name: "Mixciken Rich Bowl", price: "229/-" },
        ],
    },
    {
        category: "Soup",
        items: [
            { name: "Thai Soup", price: "129/-" },
            { name: "Corn Soup", price: "119/-" },
        ],
    },
    {
        category: "Salad",
        items: [
            { name: "Cashewnut Salad 1-2", price: "369/-" },
            { name: "Cashewnut Salad 1-3", price: "499/-" },
        ],
    },
    {
        category: "Coffee",
        items: [
            { name: "Cold Coffee", price: "99/-" },
            { name: "Hot Coffee", price: "80/-" },
            { name: "Chocolate Hot Coffee", price: "129/-" },
            { name: "Vanilla Milkshake", price: "119/-" },
            { name: "Chocolate Milkshake", price: "129/-" },
            { name: "Oreo Milkshake", price: "129/-" },
            { name: "Strawberry Milkshake", price: "139/-" },
        ],
    },
    {
        category: "Juice",
        items: [
            { name: "Mango Juice", price: "-" },
            { name: "Lemon Juice", price: "59/-" },
            { name: "Malta Juice", price: "99/-" },
            { name: "Orange Juice", price: "99/-" },
            { name: "Apple Juice", price: "99/-" },
            { name: "Papaya Juice", price: "99/-" },
            { name: "Pineapple Juice", price: "99/-" },
            { name: "Grape Juice", price: "129/-" },
        ],
    },
    {
        category: "Momo",
        items: [
            { name: "Vegetable Momo (5pcs)", price: "99/-" },
            { name: "Chicken Momo (5pcs)", price: "109/-" },
            { name: "Fried Momo (5pcs)", price: "119/-" },
            { name: "Cheesy Momo (5pcs)", price: "169/-" },
            { name: "Friday Special Momo (6pcs)", price: "199/-" },
        ],
    },
    {
        category: "Waffle",
        items: [
            { name: "Chocolate Waffle", price: "129/-" },
            { name: "Blueberry Waffle", price: "199/-" },
            { name: "Chocolate Pista Seo Waffle", price: "179/-" },
            { name: "Vanilla Waffle", price: "169/-" },
            { name: "kitkat Waffle", price: "189/-" },
            { name: "Nuts Miniya Waffle", price: "169/-" },
            { name: "Strawberry Waffle", price: "199/-" },
        ],
    },
    {
        category: "Sandwich",
        items: [
            { name: "Mixciken Sanduiche", price: "159/-" },
            { name: "B. B. Q Sanduiche", price: "149/-" },
            { name: "Naga Sanduiche", price: "149/-" },
        ],
    },
    {
        category: "Chips Mix",
        items: [
            { name: "Regular Chips Mix", price: "89/-" },
            { name: "Chicken Chips Mix", price: "109/-" },
        ],
    },
];

// Combo data
const comboData = [
    {
        name: "Waffle Lover's Combo",
        description: "Perfect for waffle enthusiasts",
        items: [
            { name: "Chocolate Waffle", price: "129/-" },
            { name: "Strawberry Milkshake", price: "139/-" },
            { name: "French Fries", price: "99/-" },
        ],
        originalPrice: 367,
        discountedPrice: 300,
    },
    {
        name: "Momo Feast Combo",
        description: "For momo lovers",
        items: [
            { name: "Chicken Momo (10pcs)", price: "218/-" },
            { name: "Vegetable Momo (10pcs)", price: "198/-" },
            { name: "Thai Soup", price: "129/-" },
        ],
        originalPrice: 545,
        discountedPrice: 450,
    },
    {
        name: "Burger Mania Combo",
        description: "Ultimate burger experience",
        items: [
            { name: "BBQ Burger", price: "169/-" },
            { name: "French Fries Loaded", price: "139/-" },
            { name: "Cold Coffee", price: "99/-" },
        ],
        originalPrice: 407,
        discountedPrice: 350,
    },
];

// Function to create menu categories
function createMenuCategories() {
    const categoriesContainer = document.querySelector(".menu-categories");

    // Create "All Categories" button
    const allButton = document.createElement("button");
    allButton.classList.add("category-btn", "active");
    allButton.textContent = "All Categories";
    categoriesContainer.appendChild(allButton);

    // Create category buttons
    menuData.forEach((category) => {
        const button = document.createElement("button");
        button.classList.add("category-btn");
        button.textContent = category.category;
        categoriesContainer.appendChild(button);
    });
}

// Function to create menu items
function createMenuItems() {
    const menuGrid = document.getElementById("menu-grid");

    menuData.forEach((category) => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("menu-category");

        const header = document.createElement("div");
        header.classList.add("category-header");
        header.textContent = category.category;
        categoryElement.appendChild(header);

        const itemsContainer = document.createElement("div");
        itemsContainer.classList.add("category-items");

        category.items.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("menu-item");

            const name = document.createElement("span");
            name.classList.add("item-name");
            name.textContent = item.name;

            const price = document.createElement("span");
            price.classList.add("item-price");
            price.textContent = item.price;

            itemElement.appendChild(name);
            itemElement.appendChild(price);
            itemsContainer.appendChild(itemElement);
        });

        categoryElement.appendChild(itemsContainer);
        menuGrid.appendChild(categoryElement);
    });
}

// Function to create combo offers
function createComboOffers() {
    const comboGrid = document.getElementById("combo-grid");

    comboData.forEach((combo) => {
        const comboCard = document.createElement("div");
        comboCard.classList.add("combo-card");

        const header = document.createElement("div");
        header.classList.add("combo-header");
        header.innerHTML = `<h3>${combo.name}</h3><p>${combo.description}</p>`;
        comboCard.appendChild(header);

        const body = document.createElement("div");
        body.classList.add("combo-body");

        // Add combo items
        combo.items.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("combo-item");

            const name = document.createElement("span");
            name.textContent = item.name;

            const price = document.createElement("span");
            price.textContent = item.price;

            itemElement.appendChild(name);
            itemElement.appendChild(price);
            body.appendChild(itemElement);
        });

        // Add total value
        const totalElement = document.createElement("div");
        totalElement.classList.add("combo-item");
        totalElement.innerHTML =
            "<span>Total Value</span><span>৳" + combo.originalPrice + "</span>";
        body.appendChild(totalElement);

        comboCard.appendChild(body);

        // Add combo price section
        const priceSection = document.createElement("div");
        priceSection.classList.add("combo-price");
        priceSection.innerHTML = `
            <span class="original-price">৳${combo.originalPrice}</span>
            <span class="discounted-price">৳${combo.discountedPrice}</span>
            <div class="discount-badge">Save ৳${
                combo.originalPrice - combo.discountedPrice
            } (${Math.round(
            ((combo.originalPrice - combo.discountedPrice) /
                combo.originalPrice) *
                100
        )}%)</div>
        `;
        comboCard.appendChild(priceSection);

        comboGrid.appendChild(comboCard);
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    createMenuCategories();
    createMenuItems();
    createComboOffers();

    // Category filtering functionality
    const categoryBtns = document.querySelectorAll(".category-btn");
    const menuCategories = document.querySelectorAll(".menu-category");

    categoryBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Remove active class from all buttons
            categoryBtns.forEach((b) => b.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            const category = this.textContent.trim();

            if (category === "All Categories") {
                menuCategories.forEach((cat) => (cat.style.display = "block"));
            } else {
                menuCategories.forEach((cat) => {
                    const header =
                        cat.querySelector(".category-header").textContent;
                    if (header === category) {
                        cat.style.display = "block";
                    } else {
                        cat.style.display = "none";
                    }
                });
            }
        });
    });
});
