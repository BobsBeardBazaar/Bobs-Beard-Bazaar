const db = require('APP/db')

const usersToAdd = [
    {name: 'The Admin', email: 'god@example.com', password: '1234', isAdmin: true},
    {name: 'Andrew', email: 'andrew@thebeardsarecoming.io', password: '1234', isAdmin: true},
    {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'}
];

const categoriesToAdd = [
    { name: 'Eyebrows' }, { name: 'Mustaches' }, { name: 'Beards' }
];

const productsToAdd = [
    {
        name: `Joe's fabulous mustache`,
        image: 'www.google.com',
        description: 'There are no words to explain',
        quantity: '3',
        price: '87.12',
        category_id: 2
    },
    {
        name: `Surabhi's extravagant beard`,
        image: 'www.google.com',
        description: 'This is the beard you were supposed to have',
        quantity: '87',
        price: '100.85',
        category_id: 3
    },
    {
        name: `The Yoo-Nah-Brow`,
        image: 'www.google.com',
        description: 'If you look up eyebrow in the dictionary, this pops up. Just buy it.',
        quantity: '1',
        price: '870.12',
        category_id: 1
    }
];

const reviewsToAdd = [
    {
        comment: `Seriously, no words for this product. Made in the USA. Organically grown. Safe for the entire family. 10 out of 10 would buy again.`,
        rating: 5,
        title: `I can't stop wearing it...`,
        product_id: 1,
        author_id: 2
    },
    {
        comment: `I would give this 5 stars if the installation was a little more clear. Overall though I am very pleased`,
        rating: 4,
        title: `I wish I had 3`,
        product_id: 2,
        author_id: 2
    }
];

const addressesToAdd = [
    {
        name: `Home`,
        address: `9284292 Main St, Ann Arbor MI 48103`,
        user_id: 1
    },
    {
        name: `Work`,
        address: `1233 W Liberty St, Ann Arbor MI 48103`,
        user_id: 1
    }
];

const ordersToAdd = [
    {
        status: 'cart',
        stripeToken: `123456abc`,
        shipping_address_id: 1,
        user_id: 1
    },
    {
        status: 'processing',
        stripeToken: `123456abc`,
        shipping_address_id: 2,
        user_id: 1
    }
];

const orderProductsToAdd = [
    {
        quantity: 1,
        price: 10.87,
        order_id: 1,
        product_id: 2
    },
    {
        quantity: 4,
        price: 15.99,
        order_id: 1,
        product_id: 1
    },
    {
        quantity: 1,
        price: 18.39,
        order_id: 1,
        product_id: 3
    }
];

function seedFn(seedData, model) {
    return () => db.Promise.map(seedData, data => {
        return db.model(model).create(data);
    });
}

const seedUsers = () => db.Promise.map(usersToAdd,
    user => db.model('users').create(user));

const seedCategories = () => db.Promise.map(categoriesToAdd,
    category => db.model('category').create(category));

const seedProducts = () => db.Promise.map(productsToAdd,
    product => db.model('products').create(product));

const seedReviews = () => db.Promise.map(reviewsToAdd,
    review => db.model('review').create(review));

const seedAddresses = () => db.Promise.map(addressesToAdd,
    address => db.model('addresses').create(address));

const seedOrders = () => db.Promise.map(ordersToAdd,
    order => db.model('orders').create(order));

const seedOrderProducts = () => db.Promise.map(orderProductsToAdd,
    orderProduct => db.model('orderProducts').create(orderProduct));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedFn(usersToAdd, 'category'))
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedFn(categoriesToAdd, 'users'))
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedFn(productsToAdd, 'products'))
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedFn(reviewsToAdd, 'review'))
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedFn(addressesToAdd, 'addresses'))
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedFn(ordersToAdd, 'orders'))
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedFn(orderProductsToAdd, 'orderProducts'))
  .then(orderProducts => console.log(`Seeded ${orderProducts.length} orderProducts OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
