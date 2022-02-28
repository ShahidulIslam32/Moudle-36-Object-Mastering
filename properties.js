let product = {itemName: 'Ram', Capacity: '4Gb', isWarenty : true, usingTime: '1 year'}
let result = Object.keys(product)
let updateResult = Object.values(product)
let final = Object.entries(product)
console.log(final);

const obj1 = { module: 35, video: 2 }; const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend()); 