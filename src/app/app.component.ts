import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from "src/app/services/apis/common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Volkswagen';
  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
