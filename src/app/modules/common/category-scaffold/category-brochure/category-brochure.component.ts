import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-category-brochure',
    templateUrl: './category-brochure.component.html',
    styleUrls: ['./category-brochure.component.scss']
})
export class CategoryBrochureComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    // download() {

    //     fetch(this.link, { method: 'GET' })
    //         .then(res => {
    //             return res.blob();
    //         })
    //         .then(blob => {
    //             var url = window.URL.createObjectURL(blob);
    //             var a = document.createElement('a');
    //             a.href = url;
    //             a.download = 'myItem.extension';
    //             document.body.appendChild(a);
    //             a.click();
    //             setTimeout(
    //                 (_any:any) => { window.URL.revokeObjectURL(url); },
    //                 60000);
    //             a.remove();
    //         })
    //         .catch(err => {
    //             console.error('err: ', err);
    //         })
    // }

    @Input() name: any
    @Input() link: any


}
