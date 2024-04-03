// run `node Level_3/task5.js` in the terminal

/*Berikut adalah implementasi fungsi countArray yang menerima parameter bertipe data array of integer dan menjumlahkan semua elemen di dalam array tersebut*/

// Membuat fungsi countArray yang menerima parameter bertipe data array of integer
// Fungsi ini akan menjumlahkan semua elemen di dalam array dan mengembalikan hasil penjumlahan
function countArray(arr) {
  // Mengecek apakah parameter bukan array atau kosong
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log(
      'Parameter harus bertipe data array of integer dan tidak boleh kosong'
    );
    return; // Menghentikan eksekusi fungsi jika parameter tidak sesuai
  }

  let total = 0; // Variabel untuk menyimpan total penjumlahan

  // Loop untuk menjumlahkan semua elemen di dalam array
  for (let i = 0; i < arr.length; i++) {
    // Mengecek apakah elemen saat ini adalah integer
    if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
      console.log('Array harus berisi elemen bertipe data integer');
      return; // Menghentikan eksekusi fungsi jika terdapat elemen yang bukan integer
    }

    total += arr[i]; // Menambahkan elemen ke total penjumlahan
  }

  return total; // Mengembalikan hasil penjumlahan
}

// Memanggil fungsi countArray dengan beberapa array
console.log(countArray([1, 2, 3, 4, 5])); // Output: 15
console.log(countArray([2, 2, 2, 2, 2])); // Output: 10
