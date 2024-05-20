import { Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser'
@Component({
    selector: 'insurancePolicy',
    templateUrl: './insurancePolicy.component.html',
    styleUrls: ['./insurancePolicy.component.css']
})
export class InsurancePolicyComponent implements OnInit {
    constructor(
        private meta: Meta
    ) { }

    ngOnInit(): void {
        
    }
}