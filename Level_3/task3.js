// run `node Level_3/task3.js` in the terminal
//Cara membuat sebuah function di JavaScript:
// Membuat function salam dengan parameter nama
// Function ini akan menampilkan pesan salam dengan nama yang diberikan
function salam(nama) {
  return console.log('Halo ' + nama + ', selamat pagi!');
}
/*salam yang menerima satu parameter nama dan akan menampilkan pesan salam dengan nama yang diberikan. Function kedua adalah perkalian yang menerima dua parameter */

/*Function dengan nama "perkalian" yang menerima parameter "bilanganPertama" dan "bilanganKedua", lalu me-return hasil perkalian dari kedua parameter tersebut:*/

// Membuat function perkalian dengan parameter bilanganPertama dan bilanganKedua
// Function ini akan mengembalikan hasil perkalian dari kedua parameter
function perkalian(bilanganPertama, bilanganKedua) {
  return bilanganPertama * bilanganKedua;
}

// Memanggil function perkalian dengan argument 5 dan 10
console.log(perkalian(5, 10)); // Output: 50

/*bilanganPertama dan bilanganKedua dan akan mengembalikan hasil perkalian dari kedua parameter tersebut. Setelah itu, kedua function tersebut dipanggil dengan memberikan argument yang sesuai.*/
