// Esercizio 1

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
      return `${user1.firstName} ${user1.lastName} è più vecchio di ${user2.firstName} ${user2.lastName}. Questo significa che la persona che viene da ${user1.location} è piu grande della persona che viene da ${user2.location}.`;
    } else if (user1.age < user2.age) {
      return `${user1.firstName} ${user1.lastName} è piu giovane ${user2.firstName} ${user2.lastName}.  Questo significa che la persona che viene da ${user1.location} è piu piccola people della persona che viene da ${user2.location}.`;
    } else {
      return `${user1.firstName} ${user1.lastName} e ${user2.firstName} ${user2.lastName} hanno la stessa età. Questo significa che la persona che viene da ${user1.location} ha la stessa età della persona che viene da ${user2.location}.`;
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

const lista = document.getElementById("listaUser");
const compareAge1 = document.createElement("li");
compareAge1.textContent = User.compareAge(utente1, utente3);
lista.appendChild(compareAge1);

const compareAge2 = document.createElement("li");
compareAge2.textContent = User.compareAge(utente2, utente3);
lista.appendChild(compareAge2);

const compareAge3 = document.createElement("li");
compareAge3.textContent = User.compareAge(utente4, utente1);
lista.appendChild(compareAge3);

// Esercizio 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

class Petlist {
  constructor() {
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
}

const addForm = document.getElementById("aggiungiForm");
const listaAnimali = document.getElementById("listaAnimali");
const petList = new Petlist();
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const pet = new Pet(petName, ownerName, species, breed);
  petList.addPet(pet);
  aggiornaListaAnimali();
  addForm.reset();
  checkSameOwner();
});
console.log(petList);

function aggiornaListaAnimali() {
  listaAnimali.innerHTML = "";
  for (const pet of petList.pets) {
    const petDiv = document.createElement("div");
    petDiv.innerHTML = `
    <strong>Nome Animale:</strong> ${pet.petName}<br>
    <strong>Nome Proprietario:</strong> ${pet.ownerName}<br>
    <strong>Specie:</strong> ${pet.species}<br>
    <strong>Razza:</strong> ${pet.breed}`;
    listaAnimali.appendChild(petDiv);
  }
}

function checkSameOwner() {
  let sameOwner = false;
  const owners = {};
  for (const pet of petList.pets) {
    if (!owners[pet.ownerName]) {
      owners[pet.ownerName] = [pet.petName];
    } else {
      owners[pet.ownerName].push(pet.petName);
      sameOwner = true;
    }
  }
  const sameOwnerDiv = document.createElement("div");
  sameOwnerDiv.innerHTML = `<strong> Qualche animale con lo stesso padrone?</strong> ${
    sameOwner ? "Yes" : "NO"
  }`;

  if (sameOwner) {
    const ownerList = document.createElement("ul");
    for (const ownerName in owners) {
      if (owners[ownerName].length > 1) {
        const ownerItem = document.createElement("li");
        ownerItem.innerHTML = `${ownerName}: ${owners[ownerName].join(",")}`;
        ownerList.appendChild(ownerItem);
        localStorage.setItem("lista", ownerItem.innerText);
      }
    }
    sameOwnerDiv.appendChild(ownerList);
  }

  listaAnimali.appendChild(sameOwnerDiv);
}
