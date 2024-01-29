import { API_INSTANCE } from './instance';

class BookApi {
    private BASE_URL = '/books';
    getAllBooks() {
        return API_INSTANCE.get(`${this.BASE_URL}/all`);
    }

    getBookById(id: number) {
        return API_INSTANCE.get(`${this.BASE_URL}/detail/${id}`);
    }
}

const BOOK_API = new BookApi();

export default BOOK_API;
