import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/apis/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PAGE_META_DESCRIPTION, PAGE_TITLE } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private titleService:Title,
    private meta: Meta,
  ) { this.titleService.setTitle(`${PAGE_TITLE.news} | Volkswagen Việt Nam`);  }

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
      let { pageIndex } = param
      this.pageIndex = parseInt(pageIndex)
      pageIndex = this.pageIndex - 1
      // console.log('pageIndex', pageIndex)
      // get data province
      this.commonService.getAllNews().subscribe((data: any) => {
        // console.log('data', data)
        this.newsList = data.filter((item: any) => {
          return item.IsActive && item.Type == 'new'
        })
        // console.log('newsList', this.newsList)
        this.newsListShow = this.newsList.splice(pageIndex * this.pageSize, (pageIndex + 1) * this.pageSize)
        // console.log('newsListShow', this.newsListShow)

        this.paginationTotal = Math.ceil(this.newsList.length / 9)
        this.linkPagination = []
        for (let i = 0; i <= this.paginationTotal; i++)
          this.linkPagination.push({ link: `/news/page/${i + 1}`, index: i + 1 })
        // scroll top -- khó hiểu 
        window.scrollTo({ top: 0, })
        // console.log('paginationTotal', this.paginationTotal)
        // console.log('linkPagination', this.linkPagination)
        // console.log('pageIndex', this.pageIndex)

      })

    });
  }
  newsList: any[] = []
  newsListShow: any[] = []
  paginationTotal: number = 0
  linkPagination: any[] = []
  pageSize: number = 9
  pageIndex: number = 1

}
