import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BannerModel,
  NewsModel,
  PromotionModel,
} from 'src/app/modules/common/component/model';

@Injectable()
export class CommonService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };
  httpFormOptions: any = {
    headers: new HttpHeaders({ Accept: 'Application/json' }),
  };
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getIp(): Observable<any> {
    return this.http.get('https://ipinfo.io/json');
  }
  putAnalyticsURL(data: any): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/analyticsurl/updatepageview';
    return this.http.put<any>(apiUrl, data, this.httpOptions);
  }
  getAllDealer(): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/dealer/getall';
    return this.http.get<any>(apiUrl);
  }
  getAllNews(): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/Vi-vn/news/getall';
    return this.http.get<any>(apiUrl);
  }
  getNewsById(id: any): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/vi-VN/news/getbyid?id=${id}`;
    return this.http.get<any>(apiUrl);
  }
  postOrder(data: any): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/order/v2';
    return this.http.post<any>(apiUrl, data, this.httpOptions);
  }
  postOrderHasParameters(
    data: any,
    utm_source: string,
    aff_sid: string
  ): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/order/v2?utm_source=${utm_source}&tracking_id=${aff_sid}`;
    return this.http.post<any>(apiUrl, data, this.httpOptions);
  }

  checkOrderStatus(accountNumber: string): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/order/getbyaccnum?accountNumber=${accountNumber}`;
    return this.http.get<any>(apiUrl, this.httpOptions);
  }

  getProduct(): Observable<any> {
    const apiUrl =
      'https://api.vw.com.vn/api/vi-VN/product/paging?pageIndex=1&pageSize=9999999'; // https://api.vw.com.vn/api/vn-VN/product
    return this.http.get<any>(apiUrl);
  }

  getProductAttributes(id: number): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/vi-VN/product/${id}/attributes`;
    return this.http.get<any>(apiUrl);
  }
  getCategory(): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/category/getall';
    return this.http.get<any>(apiUrl);
  }
  getCategoryById(id: any): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/category/${id}/getbyid`;
    return this.http.get<any>(apiUrl);
  }
  getFee(): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/fee/get';
    return this.http.get<any>(apiUrl);
  }
  getCity(): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/fee/getcity';
    return this.http.get<any>(apiUrl);
  }
  getFeeByCity(city: any): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/fee/${city}/getbycity`;
    return this.http.get<any>(apiUrl);
  }
  getService(): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/service/get';
    return this.http.get<any>(apiUrl);
  }
  getComponentsByNewURL(link: string): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/component/getcomponentsbynewurl?url=${link}`;
    return this.http.get<any>(apiUrl);
  }
  getComponentsByNewId(id: string): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/component/getcomponentsbynewid?${id}`;
    return this.http.get<any>(apiUrl);
  }
  getListOwner(): Observable<any> {
    const apiUrl = `https://api.vw.com.vn/api/vi-vn/news/getallpage`;
    return this.http.get<any>(apiUrl);
  }

  getShopNameByShopCode(shopCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/common/shop/${shopCode}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  }

  getListBanner() {
    let banners: BannerModel = new BannerModel();
    return of(banners);
  }

  getListPromotion() {
    let promotions: PromotionModel = new PromotionModel();
    return of(promotions);
  }

  getListNews() {
    let news: NewsModel[] = [];

    for (var i = 0; i < 10; i++) {
      news.push(new NewsModel());
    }
    return of(news);
  }

  //BRAVO
  loginBravo(data: any): Observable<any> {
    const apiUrl = 'https://dms.vw.com.vn/sms/api/Login';
    // let headers =  new HttpHeaders({ 'Content-Type': 'Application/json' })

    return this.http.post<any>(apiUrl, data, this.httpOptions);
  }

  getBravo(data: any, token: string): Observable<any> {
    const apiUrl = `https://dms.vw.com.vn/sms/api/Sync?func=SyncGet&cm=`;
    let httpOption1: any = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'Application/json',
      }),
    };
    return this.http.post<any>(apiUrl, data, httpOption1);
  }

  postBravo(data: any, token: string): Observable<any> {
    const apiUrl = 'https://dms.vw.com.vn/sms/api/Sync?func=SyncAdd&cm=';
    let httpOption1: any = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'Application/json',
      }),
    };

    return this.http.post<any>(apiUrl, data, httpOption1);
  }

  postSurvey(data: any): Observable<any> {
    const apiUrl = 'https://api.vw.com.vn/api/survey';
    return this.http.post<any>(apiUrl, data, this.httpFormOptions);
  }
}
