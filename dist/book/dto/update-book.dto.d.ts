import { CreateBookDto } from './create-book.dto';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    id?: number;
    title?: string;
    author?: string;
    publisedyear?: string;
}
export {};
