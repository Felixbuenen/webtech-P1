class Book {
    constructor(name, author, numPages, publisher, isbn) {
        this.name = name;
        this.author = author;
        this.numPages = numPages;
        this.publisher = publisher;
        this.isbn = isbn;
    }
}

class Author {
    constructor(name, infoLink, imageRef) {
        this.name = name;
        this.infoLink = infoLink;
        this.imageRef = imageRef;
    }
}

class Name {
    constructor(firstName, middleName, surname) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.surname = surname;
    }

    //get initials();
    //get fullName();
}

class Company {
    constructor(name, ceo, country, city) {
        this.name = name;
        this.ceo = ceo;
        this.country = country;
        this.city = city;
    }
}

class Publisher extends Company {
    constructor(name, ceo, country, city, publicationType, famousPublications) {
        super(name, ceo, country, city);

        this.publicationType = publicationType;
        this.famousPublications = famousPublications;
    }
}

// setup content data
let rowling = new Author(new Name("Joanne", "K.", "Rowling"), "https://www.jkrowling.com/", "./images/rowling.jpg");
let bloomsbury = new Publisher("Bloomsbury Publishing", "Nigel Newton", "England", "London", ["Books", "digital content"], ["Harry Potter", "The Kite Runner"]);
let hp1Book = new Book("Harry Potter and the Philosopher's Stone", rowling, "223", bloomsbury, "9781408855652");

// when window loaded, call setupInfo
window.addEventListener("load", setupInfo, false);

// setup HTML formatting
function setupInfo() {
    let contentNode = document.getElementsByClassName("content")[0];

    // create title
    let header1 = document.createElement("h1");
    let text = document.createTextNode("Info");
    header1.appendChild(text);
    contentNode.appendChild(header1);
}