import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
type ITypeButton = 'primary' | 'secondary';
type ISizeButton = 'small' | 'medium' | 'large';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
    @Input() name: string = 'Button';
    @Input() type?: ITypeButton = 'primary';
    @Input() link?: string = '';
    @Input() size?: ISizeButton = 'medium';
    constructor(private route: Router) {

    }
    ngOnInit(): void {
    }

}