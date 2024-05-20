import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'panoee',
    templateUrl: './panoee.component.html',
    styleUrls: ['./panoee.component.css'], 
})

export class PanoeeComponent {
    constructor(private route: Router){}

    goback(){
        this.route.navigateByUrl('/homepage')
    }
}