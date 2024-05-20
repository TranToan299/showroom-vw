import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.scss']
})
export class PoloComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private meta: Meta,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    // scroll top -- khó hiểu 
    window.scrollTo({ top: 0, })
    // update meta
    this.commonService.getCategoryById(7).subscribe((data: any) => {
      //console.log(data)
      this.meta.updateTag({ name: 'description', content: data.SeoDescription });
      this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
    })
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      //console.log({ URL: window.location.href, Ip: ip })
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
        //console.log('putAnalyticsURL')
        //console.log({ URL: window.location.href, Ip: ip })
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
      
    `;
    //console.log('---------test script---------')
    this._renderer2.appendChild(this._document.body, script1);
    setTimeout(() => {
      this._renderer2.appendChild(this._document.body, script2);
    }, 1000)
  }
  // nội thất
  imageInterior: string = './assets/images/cate/polo/interior0.jfif'
  onInteriorTabOpen(e: any) {
    let index = e.index
    this.imageInterior = `./assets/images/cate/polo/interior${index}.jfif`
  }
  // nội thất
  imageDesign: string = './assets/images/cate/polo/design0.jfif'
  onDesignTabOpen(e: any) {
    let index = e.index
    this.imageDesign = `./assets/images/cate/polo/design${index}.jfif`
  }

}
