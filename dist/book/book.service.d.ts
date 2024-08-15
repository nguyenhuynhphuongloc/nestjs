import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
export declare class BookService {
    private books;
    create(createUserDto: CreateBookDto): Book;
    findAll(): Book[];
    findOne(id: number): Book;
    update(id: number, updateBookDto: any): void;
    remove(id: number): void;
}
