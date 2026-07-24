console.log("Info");
console.warn("Peringatan");
console.error("Error");

console.table([
    { nama: "Andi", umur: 25 },
    { nama: "Budi", umur: 30 }
]);

console.group("Detail Log Group");
console.log("Pesan 1 dalam group");
console.log("Pesan 2 dalam group");
console.groupEnd();

console.time("WaktuProses");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("WaktuProses");
