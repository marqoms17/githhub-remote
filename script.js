// var noAngkot = 1,
//     jmlAngkot = 10,
//     angkotBeroperasi = 6;

// for(noAngkot = 1; noAngkot<=jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log("Angkot No." + noAngkot +" beroperasi dengan baik.");
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log("Angkot No." + noAngkot +" sedang lembur.");
//     } else {
//         console.log("Angkot No." + noAngkot +" sedang tidak beroperasi.");
//     }
// }


// while (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No." + noAngkot +" beroperasi dengan baik.");
// noAngkot++;
// }

// for (noAngkot = angkotBeroperasi+1; noAngkot<=jmlAngkot; noAngkot++) {
//     console.log("Angkot No." + noAngkot +" sedang tidak beroperasi.");
// }

// var angka = prompt("masukan angka : ");
// if (angka % 2 == 0) {
//     alert(angka + ' merupakan angka genap');
// } else {
//     alert(angka + ' merupakan angka ganjil');
// }

// var s = '';
// for(i = 0; i < 5; i++) {
//     for(j = 0; j <= i; j++) {
//        s += '*' 
//     }
//     s += '\n';
// }
// console.log(s);

// var t = '';
// for (i = 0; i < 5; i++) {
//     for (j = 0; j < 5; j++) {
//         t += '# '
//     }
//     t += '\n';
// }
// console.log(t);

//var s = '';
// for (i = 0; i < 10; i++) {
//     for(j = 0; j <= i; j++) {
//         s+='*'
//     }
//     s+='\n'
// }
// console.log(s)


// var salam = function(nama) {
//     alert('hai ' + nama + '! selamat datang tetap semangat biar sukses');
// }

// salam('Qomar');

// var kali = function(a,b) {
//     return a*b;
// }

// alert('Hasil perkalian : ' + parseInt(kali(4,5)));
// console.log(kali(5,9))

var arr = ['naruto', 'sasuke', 'sakura', 'kakashi', 'minato'];

// for (i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + arr[i])
// }

// method pada array
// console.log(arr.join())

// for (i = 0; i < arr.length; i++) {
//     console.log(`Mahasiswa ke-${i+1} adalah ${arr[i]}`);
// }

//method forEach
arr.forEach(function(e,i) {
     console.log(`mahasiswa konoha ke-${i+1} adalah ${e}`);
 })

// function declaration
function dataMahasiswa(nama, npm, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs1 = dataMahasiswa('Elon Musk', 201987834109, 'Teknik Elektro');

//Constructor
function Mahasiswa(nama, npm, jurusan) {
    this.nama = nama;
    this.npm = npm;
    this.jurusan = jurusan;
}

mhs2 = new Mahasiswa('Mark Zuckerberg', 202019828108,'Teknik Informatika');
