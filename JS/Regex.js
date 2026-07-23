const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
const phoneRegex = /^\+?[0-9]{10,13}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(emailRegex.test("andi@email.com"));
console.log(phoneRegex.test("081234567890"));
console.log(passwordRegex.test("Pass1234"));

console.log("andi@email.com".match(emailRegex));
console.log("abc123def".replace(/\d/g, "*"));
