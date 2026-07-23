const [a, b, ...rest] = [1, 2, 3, 4];
const { nama, umur } = { nama: "Andi", umur: 25, kota: "JKT" };

console.log(a, b, rest);
console.log(nama, umur);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };

console.log(arr2);
console.log(obj2);

const user = { nama: "Andi" };
const kota = user?.alamat?.kota ?? "Unknown";
console.log(kota);

let input = null;
const nilai = input ?? "default";
console.log(nilai);

const msg = `Halo ${nama}, umur ${umur}`;
console.log(msg);

try {
    JSON.parse("invalid json");
} catch {
    console.log("Error caught");
}

let x = 0;
x ||= 10;
let y = 5;
y &&= 20;
let z = null;
z ??= 30;

console.log(x, y, z);
