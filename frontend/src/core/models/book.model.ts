import { IsNotEmpty, IsUrl, IsNumber, IsOptional, IsBoolean } from 'class-validator';

class BookModel {
    @IsNotEmpty({ groups: ['edit', 'create'] })
    public bookid: number;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public title: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public author: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public categoryid: number;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    @IsNumber()
    public price: number;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public description: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    @IsNumber()
    public stockquantity: number;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public isbn: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    public publishedDate: string;

    @IsNotEmpty({ groups: ['edit', 'create'] })
    @IsUrl()
    public image: string;

    @IsOptional()
    @IsNumber()
    public languageID: number;

    @IsOptional()
    @IsNumber()
    public publisherID: number;

    @IsOptional()
    @IsNumber()
    public weight: number;

    @IsOptional()
    @IsNumber()
    public page: number;

    @IsOptional()
    public dimensions: string;

    @IsOptional()
    @IsBoolean()
    public featured: boolean;

    @IsOptional()
    @IsBoolean()
    public bestseller: boolean;

    constructor(props: Partial<BookModel>) {
        Object.assign(this, props);
    }
}

export default BookModel;
