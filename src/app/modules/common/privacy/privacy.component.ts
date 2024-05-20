import { Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser'
@Component({
    selector: 'privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css']
})
export class PrivacyPageComponent implements OnInit {
    constructor(
        private meta: Meta
    ) { }

    ngOnInit(): void {
        
    }
}