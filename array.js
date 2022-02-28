// Problem without array
const animal1 = "Cat";
const animal2 = "Dog";
const animal3 = "Fish";
// .....
const animal100 = "Bird";

// Membuat variable array menggunakan const
const animals = ["Cat", "Dog", "Fish", "Bird"];

/**
 * Mengakses element atau nilai array.
 * Mengakses element berdasarkan index atau posisi.
 * Posisi (index) dimulai dari 0.
 */
console.log(animals[0], animals[1]);


// Membuat variable array menggunakan const
const animals = ["Cat", "Dog", "Fish", "Bird"];

// Looping array menggunakan for-of
for (const animal of animals) {
    console.log(`Hewan: ${animal}`);
}


// Membuat variable array menggunakan const
const animals = ["Cat", "Dog", "Fish", "Bird"];

// Looping array menggunakan for
for (let i = 0; i < animals.length; i++) {
    console.log(`Hewan: ${animals[i]}`);
}