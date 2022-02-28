/**
 * Membuat object menggunakan {}.
 * Menyimpan nilai dengan format key : value
 */
const user = {
    name: "Aufa Billah",
    age: 22,
    major: "Informatics",
};

/**
 * Mengakses nilai object menggunakan key.
 * Cara akses bisa menggunakan dot atau bracket
 */
console.log(user.name, user["age"]);



/**
 * Membuat object menggunakan {}.
 * Menyimpan nilai dengan format key : value
 */
const user = {
    name: "Aufa Billah",
    age: 22,
    major: "Informatics",
};

/**
 * Looping object menggunakan for-in.
 * Mengakses nilai menggunakan cara bracket.
 */
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}