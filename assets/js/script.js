class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  showFullUser() {
    return (
      this.firstName +
      ", " +
      this.lastName +
      ", " +
      this.age +
      ", " +
      this.location
    );
  }
  static compareAge(user1, user2) {
    if (user1.age > user2.age) {
      return `${user1.firstName} ${user1.lastName} è più vecchio di ${user2.firstName} ${user2.lastName}. Questo significa che la persona che viene da ${user1.location} è piu grande della persona che viene da ${user2.location}`;
    } else if (user1.age < user2.age) {
      return `${user1.firstName} ${user1.lastName} è piu giovane ${user2.firstName} ${user2.lastName}.  Questo significa che la persona che viene da ${user1.location} è piu piccola people della persona che viene da ${user2.location}`;
    } else {
      return `${user1.firstName} ${user1.lastName} e ${user2.firstName} ${user2.lastName} hanno la stessa età. Questo significa che la persona che viene da ${user1.location} ha la stessa età della persona che viene da ${user2.location}`;
    }
  }
}

const utente1 = new User("Franco", "Bollo", 55, "Francoforte");
const utente2 = new User("Pino", "Pallino", 23, "Pollina");
const utente3 = new User("Marco", "Dirondiro", 23, "Domodossola");
const utente4 = new User("Gianni", "Pinotto", 19, "Palermo");

console.log(utente1.showFullUser());
console.log(utente2.showFullUser());
console.log(utente3.showFullUser());
console.log(utente4.showFullUser());

console.log(User.compareAge(utente1, utente2));
console.log(User.compareAge(utente2, utente3));
console.log(User.compareAge(utente4, utente1));
