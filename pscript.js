// const val1 = parseInt("1");
// const val2 = 1;
// const sum = val1 + val2;

// document.writeln(`hasil penjumlahan :  ${sum}`);
// document.writeln(`<p>${parseFloat('12')}</p>`);
// document.writeln(`<p>${parseInt('1.2')}</p>`);
// document.writeln(`<p>${Number('11213.1')}</p>`);

// const names = ['naruto', 'sasuke', 'sakura'];
// names.push('genji');
// names.push('natsu', 'joker');
// names.shift();
// names.pop();
// names.unshift('ken');
// console.table(names);
// console.log(names);
// console.log(names.join(' -> '))
// names[0] = "jaka"
// console.log(names);

// const biodata = {};
// biodata['Nama'] = 'Elon Musk';
// biodata['Alamat'] = 'Amerika';
// biodata['Umur'] = 40;

// console.table(biodata);


// const tanya = prompt('Anda yakin mau masuk? ketikan nama Anda : ');
// if (tanya) {
//     alert(`selamat datang ${tanya}`);
// } else {
//     alert('Terimakasih');
// }

// const masuk = confirm('Anda yakin mau masuk?');
// if (masuk) {
//     const nama = prompt('Masukkan nama Anda :');
// alert(`Selamat datang ${nama}`)
// } else {
//     alert('Yahhh ngga jadi masuk deh :(');
// }


// const nilai = 20;
// // let info = nilai > 70 ? 'Congrats you pass the exam' : 'Please try again';
// document.writeln(info);

// let parameter;

// let data = parameter ?? 'Nilai Default';
// alert(data);

// for (let i = 0; i < 10; i++ ) {
//     if (i == 0) {
//         document.writeln(`<p>${i} Angka Nol</p>`);
//     } else if (i % 2 == 0) {
//         document.writeln(`<p>${i} Angka genap</p>`);
//     } else {
//         document.writeln(`<p>${i} Angka ganjil</p>`);
//     }
// }


// let counter = 1;
// while(true) {
//     document.writeln(`<p>Ini adalah perulangan while ke-${counter}</p>`);
//     counter++;
    
//     if (counter > 20) {
//         break;
//     }
// }

// const id = {
//     nama : 'Uciha Sasuke',
//     npm : 201834519088,
//     jurusan : 'Teknik Sipil'
// };

// for( const properti in id) {
//     document.writeln(`<p>${properti} : ${id[properti]}</p>`);
// }

// const fullName = 'Muhammad Qomarrudin';
// for(const char of fullName) {
//     document.writeln(`<p>${char}</p>`);
// }


// function sayHello(firstName, lastName) {
//     const say = `Hello ${firstName} ${lastName} selamat datang!`;
//     return say;
// }

// const result = sayHello('Mark', 'Zuckerberg');
// document.writeln(`${result}`);


// function multiple(a,b) {
//     const kali = `Hasil dari ${a}x${b} = ${a*b}`;
//     return kali;
// }

// const hasil = multiple(3,7);
// document.writeln(`<p>${hasil}</p>`)


// function cekValue(array,value) {
//     for(const element of array) {
//         if (element === value) {
//             return `${value} ada didalam [${array}]`;
//         }
//     } return `${value} tidak ditemukan`;
// }

// const arr = cekValue([1, 2, 3, 4, 5, 6, 7], 3);
// document.writeln(`${arr}`)


// function sum(name, ...data) {
//     total = 0;
//     count = 0;
//     for (const item of data) {
//         total += item;
//         count += 1
//     }
//     console.info(`Total ${name} = ${total} dan count = ${count}`);
// }

// sum('jeruk', 1,23,41,4,8,9,55,12);
// sum('pisang', 23, 43, 5, 67, 2, 19, 3, 20, 64);

// function outer(value='default') {
//     function inner(value) {
//         console.log(`ini isi inner function ke-${value}`);
//     }
//     inner(1);
//     inner(2);
//     console.log(`ini isi outer function ${value}`);
// }

// outer();
// outer('satu')

function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

const faktorial = factorialRecursive(5);
console.log(`${faktorial}`);

const sayHai = (name) => console.log(`hai ${name}`);

let z = sayHai('zeky');


const kali = (a,b) => a*b;

let x = kali(2,5);
console.log(x);
