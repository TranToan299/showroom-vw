import { Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
    selector: 'terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.css']
})
export class TermsPageComponent implements OnInit {
    constructor(
        private meta: Meta,
        private titleService:Title,
    ) { this.titleService.setTitle(`${PAGE_TITLE.legal} | Volkswagen Việt Nam`);  }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.legal });
    }
}