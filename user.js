class User {
    static count=0;
    constructor(name) {
        this.name = name;
        this.count = ++User.count;
    }
}
u1 = new User("johnsmith10")
console.log(u1.name)
u2 = new User("marysue1989")
console.log(u2.name)
u3 = new User("milan_rodrick")
console.log(u3.name)

console.log(User.count)