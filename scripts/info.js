class Book {
    constructor(name, author, numPages, publisher, isbn, imageRef) {
        this.name = name;
        this.author = author;
        this.numPages = numPages;
        this.publisher = publisher;
        this.isbn = isbn;
        this.imageRef = imageRef;
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
    get fullName() {
        return (this.firstName + " " + this.middleName + " " + this.surname);
    }
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

    get printLocation() {
        return (this.country + ", " + this.city);
    }

    get printPublicationType() {
        let result = "";
        this.publicationType.forEach(element => {
            result += element + ", ";
        });

        // remove last comma
        result = result.slice(0, result.length - 2);

        return result;
    }

    get printFamousFor() {
        let result = "";
        this.famousPublications.forEach(element => {
            result += element + ", ";
        });

        // remove last comma
        result = result.slice(0, result.length - 2);

        return result;
    }
}

// setup content data
let rowling = new Author(new Name("Joanne", "K.", "Rowling"), "https://www.jkrowling.com/", "./images/rowling.jpg");
let bloomsbury = new Publisher("Bloomsbury Publishing", "Nigel Newton", "England", "London", ["Books", "digital content"], ["Harry Potter", "The Kite Runner"]);
let hp1Book = new Book("Harry Potter and the Philosopher's Stone", rowling, "223", bloomsbury, "9781408855652", "./images/bookcover_stone.jpg");

// when window loaded, call setupInfo
window.addEventListener("load", setupInfo, false);

// setup HTML formatting
function setupInfo() {
    let contentNode = document.getElementsByClassName("content")[0];

    // create title
    let header1 = document.createElement("h1");
    let headerText = document.createTextNode("Info");
    header1.appendChild(headerText);
    contentNode.appendChild(header1);

    // create book image
    let bookImage = document.createElement("img");
    bookImage.alt = hp1Book.bookTitle;
    bookImage.src = hp1Book.imageRef;
    bookImage.width = 150;
    contentNode.appendChild(bookImage);

    // create book header title
    let bookTitle = document.createElement("h2");
    let bookTitleText = document.createTextNode(hp1Book.name);
    bookTitle.appendChild(bookTitleText);
    contentNode.appendChild(bookTitle);

    // create book section info
    createBookSection(contentNode);

    // create author section info
    createAuthorSection(contentNode);

    // create publisher section info
    createPublisherSection(contentNode);
}

function createBookSection(contentNode) {
    // create book header section
    let authorHeader = document.createElement("h3");
    let authorHeaderText = document.createTextNode("Book");
    authorHeader.appendChild(authorHeaderText);
    contentNode.appendChild(authorHeader);

    let bookTable = document.createElement("table");
    let bookRow1 = document.createElement("tr");
    let bookCol1 = document.createElement("td");
    let bookCol2 = document.createElement("td");
    let bookRow2 = document.createElement("tr");
    let bookCol3 = document.createElement("td");
    let bookCol4 = document.createElement("td");
    let bookRow3 = document.createElement("tr");
    let bookCol5 = document.createElement("td");
    let bookCol6 = document.createElement("td");
    let bookRow4 = document.createElement("tr");
    let bookCol7 = document.createElement("td");
    let bookCol8 = document.createElement("td");
    let bookRow5 = document.createElement("tr");
    let bookCol9 = document.createElement("td");
    let bookCol10 = document.createElement("td");

    let bookCol1Text = document.createTextNode("Name");
    let bookCol3Text = document.createTextNode("Author");
    let bookCol5Text = document.createTextNode("Publisher");
    let bookCol7Text = document.createTextNode("Number of pages");
    let bookCol9Text = document.createTextNode("ISBN");

    let bookCol2Text = document.createTextNode(hp1Book.name);
    let bookCol4Text = document.createTextNode(hp1Book.author.name.fullName);
    let bookCol6Text = document.createTextNode(hp1Book.publisher.name);
    let bookCol8Text = document.createTextNode(hp1Book.numPages);
    let bookCol10Text = document.createTextNode(hp1Book.isbn);

    bookCol1.appendChild(bookCol1Text);
    bookCol2.appendChild(bookCol2Text);
    bookCol3.appendChild(bookCol3Text);
    bookCol4.appendChild(bookCol4Text);
    bookCol5.appendChild(bookCol5Text);
    bookCol6.appendChild(bookCol6Text);
    bookCol7.appendChild(bookCol7Text);
    bookCol8.appendChild(bookCol8Text);
    bookCol9.appendChild(bookCol9Text);
    bookCol10.appendChild(bookCol10Text);

    bookRow1.appendChild(bookCol1);
    bookRow1.appendChild(bookCol2);
    bookRow2.appendChild(bookCol3);
    bookRow2.appendChild(bookCol4);
    bookRow3.appendChild(bookCol5);
    bookRow3.appendChild(bookCol6);
    bookRow4.appendChild(bookCol7);
    bookRow4.appendChild(bookCol8);
    bookRow5.appendChild(bookCol9);
    bookRow5.appendChild(bookCol10);

    bookTable.appendChild(bookRow1);
    bookTable.appendChild(bookRow2);
    bookTable.appendChild(bookRow3);
    bookTable.appendChild(bookRow4);
    bookTable.appendChild(bookRow5);

    contentNode.appendChild(bookTable);
}

function createAuthorSection(contentNode) {
    // create author header section
    let authorHeader = document.createElement("h3");
    let authorHeaderText = document.createTextNode("Author");
    authorHeader.appendChild(authorHeaderText);
    contentNode.appendChild(authorHeader);

    // create author image
    let rowlingImage = document.createElement("img");
    rowlingImage.alt = rowling.name.fullName;
    rowlingImage.src = rowling.imageRef;
    rowlingImage.width = 150;
    contentNode.appendChild(rowlingImage);

    let authorTable = document.createElement("table");
    let authorRow1 = document.createElement("tr");
    let authorCol1 = document.createElement("td");
    let authorCol2 = document.createElement("td");
    let authorRow2 = document.createElement("tr");
    let authorCol3 = document.createElement("td");
    let authorCol4 = document.createElement("td");

    let authorCol1Text = document.createTextNode("Name");
    let authorCol3Text = document.createTextNode("Info");
    let authorCol2Text = document.createTextNode(rowling.name.fullName);
    let authorCol4Text = document.createTextNode(rowling.infoLink);

    authorCol1.appendChild(authorCol1Text);
    authorCol2.appendChild(authorCol2Text);
    authorCol3.appendChild(authorCol3Text);
    authorCol4.appendChild(authorCol4Text);

    authorRow1.appendChild(authorCol1);
    authorRow1.appendChild(authorCol2);
    authorRow2.appendChild(authorCol3);
    authorRow2.appendChild(authorCol4);

    authorTable.appendChild(authorRow1);
    authorTable.appendChild(authorRow2);

    contentNode.appendChild(authorTable);
}

function createPublisherSection(contentNode) {
    // create author header section
    let publisherHeader = document.createElement("h3");
    let publisherHeaderText = document.createTextNode("Publisher");
    publisherHeader.appendChild(publisherHeaderText);
    contentNode.appendChild(publisherHeader);

    let publisherTable = document.createElement("table");
    let publisherRow1 = document.createElement("tr");
    let publisherCol1 = document.createElement("td");
    let publisherCol2 = document.createElement("td");
    let publisherRow2 = document.createElement("tr");
    let publisherCol3 = document.createElement("td");
    let publisherCol4 = document.createElement("td");
    let publisherRow3 = document.createElement("tr");
    let publisherCol5 = document.createElement("td");
    let publisherCol6 = document.createElement("td");
    let publisherRow4 = document.createElement("tr");
    let publisherCol7 = document.createElement("td");
    let publisherCol8 = document.createElement("td");
    let publisherRow5 = document.createElement("tr");
    let publisherCol9 = document.createElement("td");
    let publisherCol10 = document.createElement("td");

    let publisherCol1Text = document.createTextNode("Name");
    let publisherCol3Text = document.createTextNode("CEO");
    let publisherCol5Text = document.createTextNode("Location");
    let publisherCol7Text = document.createTextNode("Content type");
    let publisherCol9Text = document.createTextNode("Famous for");

    let publisherCol2Text = document.createTextNode(bloomsbury.name);
    let publisherCol4Text = document.createTextNode(bloomsbury.ceo);
    let publisherCol6Text = document.createTextNode(bloomsbury.printLocation);
    let publisherCol8Text = document.createTextNode(bloomsbury.printPublicationType);
    let publisherCol10Text = document.createTextNode(bloomsbury.printFamousFor);

    publisherCol1.appendChild(publisherCol1Text);
    publisherCol2.appendChild(publisherCol2Text);
    publisherCol3.appendChild(publisherCol3Text);
    publisherCol4.appendChild(publisherCol4Text);
    publisherCol5.appendChild(publisherCol5Text);
    publisherCol6.appendChild(publisherCol6Text);
    publisherCol7.appendChild(publisherCol7Text);
    publisherCol8.appendChild(publisherCol8Text);
    publisherCol9.appendChild(publisherCol9Text);
    publisherCol10.appendChild(publisherCol10Text);

    publisherRow1.appendChild(publisherCol1);
    publisherRow1.appendChild(publisherCol2);
    publisherRow2.appendChild(publisherCol3);
    publisherRow2.appendChild(publisherCol4);
    publisherRow3.appendChild(publisherCol5);
    publisherRow3.appendChild(publisherCol6);
    publisherRow4.appendChild(publisherCol7);
    publisherRow4.appendChild(publisherCol8);
    publisherRow5.appendChild(publisherCol9);
    publisherRow5.appendChild(publisherCol10);

    publisherTable.appendChild(publisherRow1);
    publisherTable.appendChild(publisherRow2);
    publisherTable.appendChild(publisherRow3);
    publisherTable.appendChild(publisherRow4);
    publisherTable.appendChild(publisherRow5);

    contentNode.appendChild(publisherTable);
}