import { IsNotEmpty, IsUrl, IsNumber } from 'class-validator';

class CategoryModel {
    public categoryid: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public categoryname: string;

    constructor(props: Partial<CategoryModel>) {
        Object.assign(this, props);
    }
}

export default CategoryModel;
