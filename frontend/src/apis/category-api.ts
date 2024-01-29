import CategoryModel from '@core/models/category.model';
import { API_INSTANCE } from './instance';

class CategoryApi {
    private BASE_URL = '/categories';
    getAllCategories() {
        return API_INSTANCE.get<CategoryModel[]>(`${this.BASE_URL}/all`);
    }

    getCategoryById(id: number) {
        return API_INSTANCE.get<CategoryModel>(`${this.BASE_URL}/detail/${id}`);
    }

    addCategory(data: CategoryModel) {
        return API_INSTANCE.post(`${this.BASE_URL}/add`, data);
    }
}

const CATEGORY_API = new CategoryApi();

export default CATEGORY_API;
