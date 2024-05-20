export class UrlObject{
    url: string 
    fileName: string 
    constructor(data: any){
        this.url = data.url;
        this.fileName = data.filename;
    }
}

