class User {
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
    }

    sapa() {
        return `Halo, saya ${this.nama}`;
    }

    get info() {
        return `${this.nama} (${this.email})`;
    }

    static fromJSON(json) {
        const data = JSON.parse(json);
        return new User(data.nama, data.email);
    }
}

class Admin extends User {
    constructor(nama, email, role) {
        super(nama, email);
        this.role = role;
    }
}

const user1 = new User("Budi", "budi@email.com");
console.log(user1.sapa());
console.log(user1.info);

const user2 = User.fromJSON('{"nama":"Cici","email":"cici@email.com"}');
console.log(user2.info);

const admin = new Admin("Andi", "andi@email.com", "super");
console.log(admin.sapa());
console.log(admin.info);
console.log(admin.role);
