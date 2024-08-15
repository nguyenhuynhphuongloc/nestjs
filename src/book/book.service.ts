import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [{ id: 0, title: "tinhyeucualoc", author: "loc", publisedyear: "12/6/6" }, { id: 1, title: "miku", author: "an", publisedyear: "30/9/2004" }];
  create(createUserDto: CreateBookDto) {
    const book = new Book();
    book.id = this.books.length;
    book.title = createUserDto.title;
    book.publisedyear = createUserDto.publisedyear;
    this.books.push(book);

    return book;
  }
  findAll() {
    return this.books;
  }

  findOne(id: number) {
   const book=this.books.find((Book)=>(Book.id===id));
   console.log("successful");
   return book;
  }

  update(id: number, updateBookDto) {
    this.books[id]=updateBookDto;
    console.log("successful");
  }
  remove(id: number) {
    const book = this.books.find((Book) => (Book.id === id));
    this.books=this.books.filter(function(value){
      return  value!=book;
    });
    console.log("successful");
  }
}
