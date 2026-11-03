const bahasaPemrograman = [
    "JavaScript",
    "PHP",
    "Python",
    "Java",
    "C#"
];

// Mengakses elemen pertama dari array
console.log(bahasaPemrograman[0]);

// Mengakses elemen ketiga dari array
console.log(bahasaPemrograman[2]);

// Mengakses elemen terakhir dari array
console.log(bahasaPemrograman[bahasaPemrograman.length - 1]);

// Mengakses elemen yang tidak ada dalam array, sehingga menghasilkan undefined
// karena indeksnya melebihi elemen yang ada
console.log(bahasaPemrograman[7]);