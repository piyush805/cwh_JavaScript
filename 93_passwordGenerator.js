//Write a password generator which generates password of diff leve (funny, weak, strong, stronger)
//Use class 

class Password {
    constructor() {
        console.log("Welcome to the password generator");
        this.pass = "";
    }
    generatePassword(len) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "1234567890";
        const special = "!@#$%^&*()_-+=~/<>{}[]";
        if (len < 3) {
            console.log("Password length < 3 characters long");
            return this.pass;
        }
        let i = 0;
        while (i < len) {//loop will append password string in multiples of 3
            this.pass += chars[Math.floor(Math.random() * chars.length)];
            this.pass += numbers[Math.floor(Math.random() * numbers.length)];
            this.pass += special[Math.floor(Math.random() * special.length)];
            i += 3;
        }
        return this.pass.substring(0, len);
    }
};

let p = new Password();
console.log(p.generatePassword(12));