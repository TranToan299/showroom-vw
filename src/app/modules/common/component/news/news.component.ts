import { Component, OnInit } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService:Title,
    private meta: Meta,
    private commonService: CommonService,) { this.titleService.setTitle(`${PAGE_TITLE.news} | Volkswagen Việt Nam`);  }

  ngOnInit(): void {
    // send view
    this.commonService.getIp().subscribe((data: any) => {
      let ip = data.ip
      this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
      })
    })
    this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.news });
    // scroll top -- khó hiểu 
    window.scrollTo({ top: 0, })
    // get route
    this.activatedRoute.params.subscribe((param: any) => {
      // console.log(param)
      let { newsId } = param
      newsId = parseInt(newsId)
      // this.commonService.getAllNews().subscribe((data: any) => {
      //   this.news = data.find((item: any) => item.IsActive && item.Id == newsId)
      //   let content: any = document.querySelector('.content')
      //   content.innerHTML = this.news.content
      // });
      this.commonService.getNewsById(newsId).subscribe((data: any) => {
        this.news = data
        let content: any = document.querySelector('.content')
        this.meta.updateTag({ property: 'og:image', content: data?.ImageUrl });
        content.innerHTML = this.news.content
      });

    })
  }
  news: any = {}

}
