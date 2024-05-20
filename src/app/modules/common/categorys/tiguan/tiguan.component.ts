import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta, Title } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
  selector: 'app-tiguan',
  templateUrl: './tiguan.component.html',
  styleUrls: ['./tiguan.component.scss']
})
export class TiguanComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private meta: Meta,
    private _renderer2: Renderer2,
    private titleService:Title,
    @Inject(DOCUMENT) private _document: Document
  ) { this.titleService.setTitle(`${PAGE_TITLE.teramont} | Volkswagen Việt Nam`);  }

  ngOnInit(): void {
    // scroll top -- khó hiểu 
    window.scrollTo({ top: 0, })
    // update meta
    this.commonService.getCategoryById(4).subscribe((data: any) => {
      console.log(data)
      this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.newTiguan });
      this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
    })
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      console.log({ URL: window.location.href, Ip: ip })
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
        console.log('putAnalyticsURL')
        console.log({ URL: window.location.href, Ip: ip })
      })
    })
    // add script tg to html
    let script1 = this._renderer2.createElement('script');
    let script2 = this._renderer2.createElement('script');
    script1.src = '//static.accesstrade.vn/js/trackingtag/tracking.min.js';
    script2.type = `text/javascript`;
    script2.text = `
      AT.init({"campaign_id":2241, "is_reoccur": 0,"is_lastclick": 1} );
      AT.track();
      console.log('---------test script---------')
    `;
    this._renderer2.appendChild(this._document.body, script1);
    setTimeout(() => {
      this._renderer2.appendChild(this._document.body, script2);
    }, 1000)
  }
  // design
  imageDesign: string = './assets/images/cate/tiguan/design0.jfif'
  onDesignTabOpen(e: any) {
    let index = e.index
    this.imageDesign = `./assets/images/cate/tiguan/design${index}.jfif`
  }
  // support
  imageSupport: string = './assets/images/cate/tiguan/support0.jfif'
  onSupportTabOpen(e: any) {
    let index = e.index
    this.imageSupport = `./assets/images/cate/tiguan/support${index}.jfif`
  }


}
