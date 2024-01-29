import BookModel from '@core/models/book.model';
import { API_INSTANCE } from './instance';

class BookApi {
    private BASE_URL = '/books';
    getAllBooks() {
        return API_INSTANCE.get<BookModel[]>(`${this.BASE_URL}/all`);
    }

    getBookById(id: number) {
        return API_INSTANCE.get<BookModel>(`${this.BASE_URL}/detail/${id}`);
    }

    addBook(data: BookModel) {
        return API_INSTANCE.post(`${this.BASE_URL}/add`, data);
    }
}

const BOOK_API = new BookApi();

export default BOOK_API;
