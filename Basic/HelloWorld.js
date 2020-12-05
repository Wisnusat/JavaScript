console.log('Hello World!');

//----------------------------------------------
/*  variables 
    3 cara mendeklarasikan variable: var, let, const
    jenis variable: undefined, null, boolean, string, number, obejct */

var pi = 3.14;

let name = 'wisnu '; //string variables
let age = 16; //integer variables
let weight = 55.5; //float varibles
let height = 170; //integer varibales

//mengubah nilai variable
name = 'satrio ';
pi = 10;

//menggabungkan variables
let wisnu = name + age + ' ' + weight + ' ' + height;

//memanggil variables
console.log(wisnu);

//const (tidak bisa diubah)
const home = 'indonesia';
//home = 'sidoarjo' akan terjadi error jika dirubah
console.log(home);
//----------------------------------------------