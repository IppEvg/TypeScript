export class Book {
    name: string
    ganre: string
    pageAmount: number

    constructor(name, ganre, pageAmount) {
        this.name = name;
        this.ganre = ganre;
        this.pageAmount = pageAmount;
    }
}