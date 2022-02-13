const randArrItem = arr => arr[Math.floor(Math.random()*arr.length)];

const KMK = [];
kmkData = ['Wife', 'Dog', 'Poop', 'Lizard', 'Mom', 'Alien', 'Ant', 'Megan Fox', 'Bradd Pitt', 'Hag Fish', 'SpongeBob'];

while (KMK.length!==3){
	var itemToBeAdded = randArrItem(kmkData);
	while (KMK.includes(itemToBeAdded)){
		itemToBeAdded = randArrItem(kmkData);
	}
	KMK.push(itemToBeAdded);
}


console.log(`Kiss: ${KMK[0]}`);
console.log(`Marry: ${KMK[1]}`);
console.log(`Kill: ${KMK[2]}`);

