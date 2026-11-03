const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewi",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

// Nomor 1
console.log("Jumlah siswa:", namaSiswa.length);

// Nomor 2
console.log("Siswa pertama:", namaSiswa[0]);
console.log("Nilai Siswa pertama:", nilaiSiswa[0]);

// Nomor 3
console.log("Siswa terakhir:", namaSiswa[namaSiswa.length - 1]);
console.log("Nilai Siswa terakhir:", nilaiSiswa[nilaiSiswa.length - 1]);

// Nomor 4
nilaiSiswa[1] = 88; // Mengubah nilai ujian Budi menjadi 88
console.log("Nilai Siswa Budi setelah diubah:", nilaiSiswa[1]);

// Nomor 5
nilaiSiswa[nilaiSiswa.length - 1] = 82; // Mengubah nilai ujian Eko menjadi 82
console.log("Nilai Siswa Eko setelah diubah:", nilaiSiswa[nilaiSiswa.length - 1]);

// Nomor 6
console.log("Nama Siswa Ketiga:", namaSiswa[2]);
console.log("Nilai Siswa Ketiga:", nilaiSiswa[2]);

console.log("NamaSiswa:", namaSiswa);
console.log("NilaiSiswa:", nilaiSiswa);

//Tantangan tambahan
let indeks = 5;

if (indeks < namaSiswa.length) {
    console.log("Nama Siswa adalah:", namaSiswa[indeks]);
} else {
    console.log("Indeks", indeks, " Tidak ada siswa pada indeks tersebut.");
}
