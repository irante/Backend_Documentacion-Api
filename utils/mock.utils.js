const { faker } = require('@faker-js/faker')


const generateProducts = () => {
  let products = []

  for (let i = 0; i < 100; i++) {
    products.push({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      code: faker.commerce.isbn(),
      price: faker.commerce.price(),
      stock: faker.number.int(5),
      
    })
  }

  return products
}

module.exports = generateProducts


