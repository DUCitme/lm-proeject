import BookModel from '@core/models/book.model';
import { API_INSTANCE } from './instance';

class BookApi {
    getAllBooks() {
        return API_INSTANCE.get<BookModel[]>(`/books/all`);
    }

    getBookById(id: number) {
        return API_INSTANCE.get<BookModel>(`/books/detail/${id}`);
    }

    addBook(data: BookModel) {
        return API_INSTANCE.post(`/books/add`, data);
    }

    updateBook(data: BookModel) {
        return API_INSTANCE.put(`/books/update/${data.bookid}`, data);
    }

    deleteBook(id: number) {
        return API_INSTANCE.delete(`/books/delete/${id}`);
    }
}

const BOOK_API = new BookApi();

export default BOOK_API;
