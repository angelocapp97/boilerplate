
// Use example of spread operator
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

// Use example of object & array destructuring
const { basement, bedrooms, bathrooms, yearBuilt: year, details = 'No details provided' } = newHouse
console.log(basement)
console.log(bedrooms)
console.log(bathrooms)
console.log(year)
console.log(details)

const age = [65, 0, 13, 21, 0, 1, 2, 3]
const [firstAge, , thirdAge, fourthAge, ...otherAges] = age
console.log(firstAge)
console.log(thirdAge)
console.log(fourthAge)
console.log(otherAges)

const printNewHouse = ({ yearBuilt: year, bedrooms: rooms}) => {
    console.log(`${year}: ${rooms}`)
}
printNewHouse(newHouse)