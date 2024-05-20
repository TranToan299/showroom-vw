import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'title-content',
    templateUrl: './title-content.component.html',
    styleUrls: ['./title-content.component.css']
})
export class TitleContent implements OnInit {
    @Input() tilte!: string
    @Input() subTilte!: string
    ngOnInit(): void {
    }
}