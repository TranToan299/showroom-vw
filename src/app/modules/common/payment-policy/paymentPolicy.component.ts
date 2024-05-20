import { Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser'
@Component({
    selector: 'paymentPolicy',
    templateUrl: './paymentPolicy.component.html',
    styleUrls: ['./paymentPolicy.component.css']
})
export class PaymentPolicyComponent implements OnInit {
    constructor(
        private meta: Meta
    ) { }

    ngOnInit(): void {
        
    }
}