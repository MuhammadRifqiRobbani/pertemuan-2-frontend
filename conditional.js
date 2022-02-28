/**
 * jika nilai di atas 90: A
 * jika nilai di atas 80: B
 * jika nilai di atas 70: C
 */

const results = 85;

// if: membuat satu kondisi
if (results > 90) {
    console.log("Grade: A");
}
// else if: membuat 2 kondisi atau lebih
else if (results > 80) {
    console.log("Grade: B");
} else if (results > 70) {
    console.log("Grade: C");
}
// else: membuat kondisi terakhir
else {
    console.log("Grade: D");
}