const daftarProduk = [
"Keyboard",
"Mouse",
"Monitor",
"Flashdisk",
"Headset",
"Webcam",
];

//Nomor 1
console.log("Jumlah produk:", daftarProduk.length);

//Nomor 2
const indeksProdukTerakhir = daftarProduk.length - 1;
console.log("Indeks produk terakhir:", indeksProdukTerakhir);

//Nomor 3
console.log("Nama produk terakhir:", daftarProduk[daftarProduk.length - 1]);

//Nomor 4
const indeksTengah = Math.floor((daftarProduk.length - 1) / 2);
console.log("Indeks produk tengah:", indeksTengah);
console.log("Nama produk tengah:", daftarProduk[indeksTengah]);