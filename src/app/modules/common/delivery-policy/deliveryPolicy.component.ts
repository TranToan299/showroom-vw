import { Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser'
@Component({
    selector: 'deliveryPolicy',
    templateUrl: './deliveryPolicy.component.html',
    styleUrls: ['./deliveryPolicy.component.css']
})
export class DeliveryPolicyComponent implements OnInit {
    constructor(
        private meta: Meta
    ) { }

    ngOnInit(): void {
        
    }
}