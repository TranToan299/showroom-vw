import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-owner-detail-horizontal',
    templateUrl: './owner-detail-horizontal.component.html',
    styleUrls: ['./owner-detail-horizontal.component.scss']
})
export class OwnerDetailHorizontalComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
    }
    @Input() image: any
    @Input() title: any
    @Input() description: any
    @Input() link: any
    @Input() items: any
    @Input() subTitle: any
    @Input() reverse: any


}
