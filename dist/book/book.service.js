"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./entities/book.entity");
let BookService = class BookService {
    constructor() {
        this.books = [{ id: 0, title: "tinhyeucualoc", author: "loc", publisedyear: "12/6/6" }, { id: 1, title: "miku", author: "an", publisedyear: "30/9/2004" }];
    }
    create(createUserDto) {
        const book = new book_entity_1.Book();
        book.id = this.books.length;
        book.title = createUserDto.title;
        book.publisedyear = createUserDto.publisedyear;
        this.books.push(book);
        return book;
    }
    findAll() {
        return this.books;
    }
    findOne(id) {
        const book = this.books.find((Book) => (Book.id === id));
        console.log("successful");
        return book;
    }
    update(id, updateBookDto) {
        this.books[id] = updateBookDto;
        console.log("successful");
    }
    remove(id) {
        const book = this.books.find((Book) => (Book.id === id));
        this.books = this.books.filter(function (value) {
            return value != book;
        });
        console.log("successful");
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map