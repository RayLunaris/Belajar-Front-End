const user = {
    nama: "Andi",
    umur: 25,
    hobby: ["coding", "gaming"],
    alamat: { kota: "Jakarta" }
};

const jsonStr = JSON.stringify(user);
console.log(jsonStr);

const parsed = JSON.parse(jsonStr);
console.log(parsed.nama);

console.log(JSON.stringify(user, null, 2));

localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser);
