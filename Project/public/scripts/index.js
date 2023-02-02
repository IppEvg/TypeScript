import { books } from "./booksCollection";
import { Book } from "./book";
function findBook(ganre, countPage, multiRecomendation = true) {
    const findAlgoritm = (book) => {
        return book.ganre == ganre && book.pageAmount <= countPage;
    };
    if (multiRecomendation) {
        return books.filter(findAlgoritm);
    }
    else {
        return books.find(findAlgoritm);
    }
}
console.log(findBook("fantasy", 920));
