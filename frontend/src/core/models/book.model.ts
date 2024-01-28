import { IsNotEmpty, IsUrl, IsNumber } from 'class-validator';

class BookModel {
    public bookID: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public title: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public author: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public description: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    @IsNumber()
    public price: number;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public categoryID: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    @IsNumber()
    public stockQuantity: number;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    @IsUrl()
    public imageURL: string;

    constructor(props: Partial<BookModel>) {
        Object.assign(this, props);
    }
}

export default BookModel;
