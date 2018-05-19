import 'isomorphic-fetch'

// Use example of babel-plugin-transform-object-rest-spread
let house = {
    bedrooms : 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    ...house
}

console.log(house)
console.log(newHouse)