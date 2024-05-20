export class NewsModel {
    title: string
    constructor() {
        this.title = 'title'
    }

}

export class BannerModel {
    public title: string
    public subTitle1: string
    public subTitle2: string
    public subTitle3: string
    public imageList: ImageModel[];
    constructor() {
        this.title = 'Title'
        this.subTitle1 = 'Sub Title'
        this.subTitle2 = 'Sub Title'
        this.subTitle3 = 'Sub Title'
        this.imageList = [new ImageModel(),
        new ImageModel(), new ImageModel(), new ImageModel(),]
    }
}

export class PromotionModel {
    public imageList: ImageModel[]
    constructor() {
        this.imageList = [new ImageModel(),
        new ImageModel(), new ImageModel(), new ImageModel(),]
    }

}

export class ImageModel {
    public description: string
    public image: string
    public title: string
    public subTitle: string
    constructor() {
        this.description = 'Decription'
        this.image = './assets/images/promotion.png'
        this.title = 'Title',
            this.subTitle = 'Sub Title'
    }
}