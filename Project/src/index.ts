import { Book } from "./book";
import { books } from "./booksCollection"

function findBook(ganre: string, countPage: number, multiRecomendation = true): Book | Book[] {
    const findAlgoritm = (book: Book) => {
        return book.ganre == ganre && book.pageAmount <= countPage
    }
    if (multiRecomendation) {
        return books.filter(findAlgoritm)
    } else {
        return books.find(findAlgoritm)
    }
}
console.log(findBook("fantasy", 920));
