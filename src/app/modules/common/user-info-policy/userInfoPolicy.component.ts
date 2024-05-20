import { Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser'
@Component({
    selector: 'userInfoPolicy',
    templateUrl: './userInfoPolicy.component.html',
    styleUrls: ['./userInfoPolicy.component.css']
})
export class UserInfoPolicyComponent implements OnInit {
    constructor(
        private meta: Meta
    ) { }

    ngOnInit(): void {
        
    }
}