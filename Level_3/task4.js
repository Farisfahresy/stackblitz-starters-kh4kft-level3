// run `node Level_3/task4.js` in the terminal
//Berikut adalah implementasi fungsi triangle yang menerima satu parameter bertipe data nomor
//dan harus nomor positif:
// Membuat fungsi triangle yang menerima satu parameter bertipe data nomor
// Fungsi ini akan menampilkan pola segitiga dengan banyak karakter sesuai nilai parameter
function triangle(num) {
  // Mengecek apakah parameter bukan nomor atau tidak positif
  if (typeof num !== 'number' || num <= 0) {
    console.log('Parameter harus bertipe data nomor dan harus nomor positif');
    return; // Menghentikan eksekusi fungsi jika parameter tidak sesuai
  }

  // Loop untuk menampilkan pola segitiga
  for (let i = 1; i <= num; i++) {
    let line = ''; // String kosong untuk menyimpan karakter pada baris ke-i

    // Loop untuk menambahkan karakter ke dalam baris ke-i
    for (let j = 1; j <= i; j++) {
      line += i; // Menambahkan karakter i sebanyak j kali pada baris ke-i
    }

    console.log(line); // Menampilkan baris ke-i
  }
}

// Memanggil fungsi triangle dengan beberapa nilai
triangle('abc'); // Output: "Parameter harus bertipe data nomor dan harus nomor positif"
triangle(-1); // Output: "Parameter harus bertipe data nomor dan harus nomor positif"
triangle(1); // Output: 1
triangle(2); // Output: 1, 22
triangle(5); // Output: 1, 22, 333, 4444, 55555
triangle(6); // Output: 1, 22, 333, 4444, 55555, 6666666
