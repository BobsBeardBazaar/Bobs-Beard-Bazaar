const db = require('APP/db');

const usersToAdd = [
    {name: 'The Admin', email: 'god@example.com', password: '1234', isAdmin: true},
    {name: 'Andrew', email: 'andrew@thebeardsarecoming.io', password: '1234', isAdmin: true},
    {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'}
];

const categoriesToAdd = [
    { name: 'Eyebrows' }, { name: 'Mustaches' }, { name: 'Beards' }, {name: 'Hair'}
];

const productsToAdd = [
    {
        name: `Joe's fabulous mustache`,
        image: 'http://dailypicksandflicks.com/wp-content/uploads/2011/03/Awesome-mustache.jpg',
        description: 'There are no words to explain',
        quantity: '3',
        price: '87.12',
        category_id: 2
    },
    {
        name: `Surabhi's extravagant beard`,
        image: 'http://pixel.nymag.com/content/dam/daily/intelligencer/2013/05/02/02-hipster-beard.jpg',
        description: 'This is the beard you were supposed to have',
        quantity: '87',
        price: '100.85',
        category_id: 3
    },
    {
        name: `The Yoo-Nah-Brow`,
        image: 'https://i.ytimg.com/vi/H_G3QqUQb3I/maxresdefault.jpg',
        description: 'If you look up eyebrow in the dictionary, this pops up. Just buy it.',
        quantity: '1',
        price: '870.12',
        category_id: 1
    },
    {
        name: `The Ron Swanson`,
        image: 'http://i.amz.mshcdn.com/nL12MLvTrE-zIvYLMvXozeRJjAM=/950x534/2012%2F12%2F04%2F91%2Fthemovember.bhT.jpg',
        description: '“Under my tutelage, you will grow from boys to men. From men into gladiators. And from gladiators into Swansons.” - Ron Swanson',
        quantity: '0',
        price: '87000.12',
        category_id: 2
    },
    {
        name: `The Hipster`,
        image: 'https://orcaflotta.files.wordpress.com/2015/07/beardhipster.jpeg',
        description: 'Get it before it gets popular',
        quantity: '19',
        price: '5.90',
        category_id: 3
    },
    {
        name: `The Freedom Bun`,
        image: 'http://images.complex.com/complex/image/upload/t_in_content_image/obamz-1445621694_nwovf2.jpg',
        description: 'If you want to see some hope and change in your life, try this out.',
        quantity: '44',
        price: '20.08',
        category_id: 4
    },
    {
        name: `Omri's Ponytail`,
        image: 'https://www.crusaderparty.co.uk/uploads/images_products_large/389_i1_plaited-pony-tail-black.jpg',
        description: 'A once in a lifetime opportunity to behold the ponytail that will rule them all. Boundless strength and power is bestowed upon the owner when worn. And at less than $1 million, this is a steal.',
        quantity: '1',
        price: '999999',
        category_id: 4
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
        comment: `My wife didn't recognize me when I walked into the door.`,
        rating: 5,
        title: `The mustache gods are watching over this one.`,
        product_id: 1,
        author_id: 2
    },
    {
        comment: `I no longer get comments like "can I have your ID sir?", or "have you hit puberty yet?".`,
        rating: 5,
        title: `I look 10 years older, and that's a good thing.`,
        product_id: 1,
        author_id: 2
    },
    {
        comment: `I would give this 5 stars if the installation was a little more clear. Overall though I am very pleased`,
        rating: 4,
        title: `I wish I had 3`,
        product_id: 2,
        author_id: 2
    },
    {
        comment: `I endorse this product.`,
        rating: 5,
        title: `Totally legitimate approval by Obama`,
        product_id: 6,
        author_id: 3
    },
    {
        comment: `Pretty comfortable and affordable. Wouldn't really say it makes you standout in a crowd especially if you're in Brooklyn, but it'll at the very least make you casually cool.`,
        rating: 4,
        title: `Pretty neat`,
        product_id: 6,
        author_id: 1
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

// Helper function to insert seed data
function seedFn(seedData, model) {
    return () => db.Promise.map(seedData, data => { // OB/DYS: change .map to .mapSeries to manage order
        return db.model(model).create(data);
    });
}

// Sync the seed data
db.didSync
  .then(() => db.sync({force: true}))
  .then(seedFn(usersToAdd, 'users'))
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedFn(categoriesToAdd, 'category'))
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
