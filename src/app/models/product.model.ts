export class Product {
    id?: string;
    code?: string;
    name: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
    hidden?: boolean;
    color?: string;

    // constructor(data: any) {
    //     this.image = './assets/images/noImage.png'
    //     this.name = 'product name'
    //     this.description = 'description'
    //     this.inventoryStatus = 'STOCK'
    //     this.price = 2901,
    //         this.rating = 5
    //     this.category = 'Product Cate 1'

    // }
    constructor(data:any ){
        this.image = data.image
        this.name = data.name
        this.description = data.description
        this.inventoryStatus = data.inventoryStatus
        this.price = data.price
        this.rating = data.rating
        this.category = data.category
        this.id = data.id
        this.hidden = data.hidden
        this.color = data.color
    }

}
