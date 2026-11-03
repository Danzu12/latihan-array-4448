const bahasaPemrograman = [
    "JavaScript",
    "PHP",
    "Python",
    "Java",
    "C#"
];

// Mengakses elemen pertama dari array
const bahasaPemrogramanPertama = bahasaPemrograman[0];
console.log(bahasaPemrogramanPertama);

// Mengakses elemen ketiga dari array
console.log(bahasaPemrograman[2]);

// Mengakses elemen terakhir dari array
const bahasaPemrogramanTerakhir = bahasaPemrograman[bahasaPemrograman.length - 1];
console.log(bahasaPemrogramanTerakhir);

// Mengakses elemen yang tidak ada dalam array, sehingga menghasilkan undefined
// karena indeksnya melebihi elemen yang ada dalam array
console.log(bahasaPemrograman[7]);