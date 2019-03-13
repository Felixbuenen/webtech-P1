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
    return this.firstName + " " + this.middleName + " " + this.surname;
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
    return this.country + ", " + this.city;
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
let rowling = new Author(
  new Name("Joanne", "K.", "Rowling"),
  "https://www.jkrowling.com/",
  "./images/rowling.jpg"
);
let bloomsbury = new Publisher(
  "Bloomsbury Publishing",
  "Nigel Newton",
  "England",
  "London",
  ["Books", "digital content"],
  ["Harry Potter", "The Kite Runner"]
);
let hp1Book = new Book(
  "Harry Potter and the Philosopher's Stone",
  rowling,
  "223",
  bloomsbury,
  "9781408855652",
  "./images/bookcover_stone.jpg"
);

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

  let titleContainer = document.createElement("article");
  titleContainer.id = "info-title-container";
  // create book header title
  let bookTitle = document.createElement("h2");
  bookTitle.id = "info-page-book-title";
  let bookTitleText = document.createTextNode(hp1Book.name);
  bookTitle.appendChild(bookTitleText);

  // create book image
  let bookImage = document.createElement("img");
  bookImage.id = "info-page-img-header";
  bookImage.alt = hp1Book.name;
  bookImage.src = hp1Book.imageRef;
  bookImage.width = 100;

  titleContainer.appendChild(bookTitle);
  titleContainer.appendChild(bookImage);
  contentNode.appendChild(titleContainer);

  // create book section info
  createBookSection(contentNode);

  // create author section info
  createAuthorSection(contentNode);

  // create publisher section info
  createPublisherSection(contentNode);
}

function createBookSection(contentNode) {
  // create article parent
  let bookArticle = document.createElement("article");
  bookArticle.className = "info-article";

  // create book header section
  let authorHeader = document.createElement("h3");
  let authorHeaderText = document.createTextNode("Book");
  authorHeader.appendChild(authorHeaderText);
  bookArticle.appendChild(authorHeader);

  let bookRows = [];
  let bookCols = [];

  // create all table elements
  let bookTable = document.createElement("table");
  bookTable.className = "info-table";

  for (let i = 0; i < 5; i++) {
    bookRows.push(document.createElement("tr"));

    bookCols.push(document.createElement("td"));
    bookCols.push(document.createElement("td"));
  }

  // create book content object
  let bookContent = {
    Name: hp1Book.name,
    Author: hp1Book.author.name.fullName,
    Publisher: hp1Book.publisher.name,
    "Number of pages": hp1Book.numPages,
    ISBN: hp1Book.isbn
  };

  let bookColTexts = [];
  // create all text nodes
  for (let item in bookContent) {
    bookColTexts.push(document.createTextNode(item));
    bookColTexts.push(document.createTextNode(bookContent[item]));
  }

  // assign parent-child relationships
  for (let i = 0; i < bookCols.length; i++) {
    bookCols[i].appendChild(bookColTexts[i]);

    let rowIndex = Math.floor(i / 2);
    bookRows[rowIndex].appendChild(bookCols[i]);

    // assign css class
    i % 2 === 0
      ? (bookCols[i].className = "info-table-title")
      : (bookCols[i].className = "info-table-value");
  }

  // make rows child of the table
  for (let i = 0; i < bookRows.length; i++) {
    bookTable.appendChild(bookRows[i]);
  }

  bookArticle.appendChild(bookTable);
  contentNode.appendChild(bookArticle);
}

function createAuthorSection(contentNode) {
  // create article parent
  let authorArticle = document.createElement("article");
  authorArticle.className = "info-article";

  // create author header section
  let authorHeader = document.createElement("h3");
  let authorHeaderText = document.createTextNode("Author");
  authorHeader.appendChild(authorHeaderText);
  authorArticle.appendChild(authorHeader);

  // create author image
  let rowlingImage = document.createElement("img");
  rowlingImage.alt = rowling.name.fullName;
  rowlingImage.src = rowling.imageRef;
  rowlingImage.width = 150;
  authorArticle.appendChild(rowlingImage);

  let authorTable = document.createElement("table");
  authorTable.className = "info-table";

  // create all table elements
  let authorCols = [];
  let authorRows = [];
  for (let i = 0; i < 2; i++) {
    authorRows.push(document.createElement("tr"));

    authorCols.push(document.createElement("td"));
    authorCols.push(document.createElement("td"));
  }

  // create author content object
  let authorColTexts = [];
  let authorContent = {
    Name: rowling.name.fullName,
    Info: rowling.infoLink
  };

  // create all text nodes
  for (let item in authorContent) {
    authorColTexts.push(document.createTextNode(item));
    authorColTexts.push(document.createTextNode(authorContent[item]));
  }

  // assign parent-child relationships
  for (let i = 0; i < authorCols.length; i++) {
    authorCols[i].appendChild(authorColTexts[i]);

    let rowIndex = Math.floor(i / 2);
    authorRows[rowIndex].appendChild(authorCols[i]);

    // assign css class
    i % 2 === 0
      ? (authorCols[i].className = "info-table-title")
      : (authorCols[i].className = "info-table-value");
  }

  // make rows child of table element
  authorTable.appendChild(authorRows[0]);
  authorTable.appendChild(authorRows[1]);

  authorArticle.appendChild(authorTable);
  contentNode.appendChild(authorArticle);
}

function createPublisherSection(contentNode) {
  // create article parent
  let publisherArticle = document.createElement("article");
  publisherArticle.className = "info-article";

  // create author header section
  let publisherHeader = document.createElement("h3");
  let publisherHeaderText = document.createTextNode("Publisher");
  publisherHeader.appendChild(publisherHeaderText);
  publisherArticle.appendChild(publisherHeader);

  let publisherTable = document.createElement("table");
  publisherTable.className = "info-table";

  // create all table elements
  let publisherCols = [];
  let publisherRows = [];
  for (let i = 0; i < 5; i++) {
    publisherRows.push(document.createElement("tr"));

    publisherCols.push(document.createElement("td"));
    publisherCols.push(document.createElement("td"));
  }

  // create publisher content object
  let publisherColTexts = [];
  let publisherContent = {
    Name: bloomsbury.name,
    CEO: bloomsbury.ceo,
    Location: bloomsbury.printLocation,
    "Content type": bloomsbury.printPublicationType,
    "Famous for": bloomsbury.printFamousFor
  };

  // create all text nodes
  for (let item in publisherContent) {
    publisherColTexts.push(document.createTextNode(item));
    publisherColTexts.push(document.createTextNode(publisherContent[item]));
  }

  // assign parent-child relationships
  for (let i = 0; i < publisherCols.length; i++) {
    publisherCols[i].appendChild(publisherColTexts[i]);

    let rowIndex = Math.floor(i / 2);
    publisherRows[rowIndex].appendChild(publisherCols[i]);

    // assign css class
    i % 2 === 0
      ? (publisherCols[i].className = "info-table-title")
      : (publisherCols[i].className = "info-table-value");
  }

  // make rows child of the table
  for (let i = 0; i < publisherRows.length; i++) {
    publisherTable.appendChild(publisherRows[i]);
  }

  publisherArticle.appendChild(publisherTable);
  contentNode.appendChild(publisherArticle);
}
