import CategoryModel from '@core/models/category.model';
import { API_INSTANCE } from './instance';

class CategoryApi {
    getAllCategories() {
        return API_INSTANCE.get<CategoryModel[]>(`/categories/all`);
    }

    getCategoryById(id: number) {
        return API_INSTANCE.get<CategoryModel>(`/categories/detail/${id}`);
    }

    addCategory(data: CategoryModel) {
        return API_INSTANCE.post(`/categories/add`, data);
    }

    updateCategory(data: CategoryModel) {
        return API_INSTANCE.put(`/categories/update/${data.categoryid}`, data);
    }

    deleteCategory(id: number) {
        return API_INSTANCE.delete(`/categories/delete/${id}`);
    }
}

const CATEGORY_API = new CategoryApi();

export default CATEGORY_API;
