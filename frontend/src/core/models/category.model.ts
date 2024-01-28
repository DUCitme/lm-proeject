import { IsNotEmpty, IsUrl, IsNumber } from 'class-validator';

class CategoryModel {
    public categoryID: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public catagoryName: string;

    constructor(props: Partial<CategoryModel>) {
        Object.assign(this, props);
    }
}

export default CategoryModel;
