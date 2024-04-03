// run `node Level_3/task2.js` in the terminal

/*Perulangan atau looping adalah proses di mana kita menjalankan serangkaian instruksi secara berulang-ulang selama kondisi tertentu terpenuhi. Looping memungkinkan kita untuk melakukan tugas-tugas berulang seperti pengulangan operasi, iterasi array, atau mengakses data dalam jumlah besar.*/

//Contoh syntax looping dalam JavaScript:

// Contoh penggunaan for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Contoh penggunaan while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Contoh penggunaan do while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

//Proses looping yang mencetak angka dari terbesar (100) sampai terkecil (90) dengan menggunakan for loop:
for (let i = 100; i >= 90; i--) {
  console.log(i);
}
