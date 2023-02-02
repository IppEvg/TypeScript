class Book {
    constructor(name, ganre, pageAmount) {
        this.name = name;
        this.ganre = ganre;
        this.pageAmount = pageAmount;
    }
}
const books = [
    new Book('Harry Potter', "fantasy", 900),
    new Book('Warcraft', "fantasy", 700),
    new Book('Game of thrones', "fantasy", 800),
    new Book('Adventure', "education", 500),
]
function findBook(ganre, countPage, multiRecomendation = true) {
    const findAlgoritm = (book) => {
        return book.ganre == ganre && book.pageAmount <= countPage
    }
    if (multiRecomendation) {
        return books.filter(findAlgoritm)
    } else {
        return books.find(findAlgoritm)
    }
}
console.log(findBook("fantasy", 1000));
console.log(findBook("fantasy", "1000"));
console.log(findBook("fantasy"));
console.log(findBook());