import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import { MessageService } from 'primeng/api';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { DOCUMENT } from '@angular/common';
// import { isBuffer } from 'util';
@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
    
    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: number;


    constructor(
        private messageService: MessageService,
        private commonService: CommonService,
        private meta: Meta,
        private _renderer2: Renderer2,
        private activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private _document: Document
    ) {
        this.selectedValue = 0
    }

    listCate: any = []
    listProduct: any = []
    listProvince: any = []
    user: any = { Username: "TMVAPI", Password: "TMV$2022" };

    objCustomer: any = { productName: "", name: "", phone: "", email: "", chassisNumber: "", description:"" }
    objImg: any = [];
    objTitle: any = {
        component: "app-category-h1",
        name: "TIẾP NHẬN GÓP Ý VÀ PHẢN HỒI KHIẾU NẠI KHÁCH HÀNG",
        mt: '100',
        description: `Chúng tôi xin chân thành cảm ơn Quý Khách đã tín nhiệm sử dụng sản phẩm và dịch vụ của chúng tôi.`,
        isCenterDescription: false
    }
    objDealer: any = {
        provinces: [{ name: '', code: '' }],
        province: '',
        dealers: {},
        dealer: '',
        phone: '',
        email: '',
        name: '',
    };
    KeyApi:any={};
    service: boolean = false;
    isEditable:boolean=true;

    display: boolean = false;
    device: string = "";


    changeWidth() {

        var w = window.innerWidth;
        var surveyBanner = (<HTMLImageElement>document.getElementById("surveyBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {

                surveyBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/surveyBannerMobile.jpg';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                surveyBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/surveyBannerTablet.jpg';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                surveyBanner.src = 'https://vw-image.s3.ap-southeast-1.amazonaws.com/image/surveyBanner.jpg';
            }
            this.device = "pc";
        }
    }

    ngOnInit(): void {
        this.changeWidth();

        window.addEventListener("resize", this.changeWidth);
        if(this.activatedRoute.snapshot.queryParamMap.get('dms')){//'AC5AC51786F72A'
            var key = this.activatedRoute.snapshot.queryParamMap.get('dms');
            this.KeyApi ={'KeyApi':key}

            this.commonService.loginBravo(this.user).subscribe((res: any) => {
                this.commonService.getBravo([this.KeyApi], res.TokenKey).subscribe((res1: any) => {
                    if(res1.length>0){
                        this.objCustomer ={ productName: res1[0].ModelName, name: res1[0].CustomerName, phone: res1[0].Tel, email: res1[0].Emal, chassisNumber: res1[0].ChassisNo, description:"" }
                        if(res1[0].IsRepairOrder==1) this.service = true;
                        else this.service = false;
                    }
                })
            })
        }
        // scroll top -- khó hiểu 
        window.scrollTo({ top: 0, })
        // update meta
        this.commonService.getCategoryById(7).subscribe((data: any) => {
            ////console.log(data)
            this.meta.updateTag({ name: 'description', content: data.SeoDescription });
            this.meta.updateTag({ name: 'keywords', content: data.SeoKeyword });
        })
        // send view
        this.commonService.getIp().subscribe((data: any) => {
            let ip = data.ip
            ////console.log({ URL: window.location.href, Ip: ip })
            this.commonService.putAnalyticsURL({ URL: window.location.href, Ip: ip }).subscribe((data: any) => {
                ////console.log('putAnalyticsURL')
                ////console.log({ URL: window.location.href, Ip: ip })
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
      ////console.log('---------test script---------')
    `;
        this._renderer2.appendChild(this._document.body, script1);
        setTimeout(() => {
            this._renderer2.appendChild(this._document.body, script2);
        }, 1000)
        // get cate
        this.commonService.getCategory().subscribe((data: any) => {
            this.listCate = data.filter((item: any) => item.IsActive);
            // get product
            this.commonService.getProduct().subscribe((data: any) => {
                data = data.Items;
                data.forEach((item1: any) => {
                    item1.CategoryName = item1.CategoryName + " " + item1.Version;
                })
                this.listProduct = data;
                ////console.log(this.listProduct);
            });
        });


    }

    showSuccess(mess: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: mess,
        });
    }

    showWarn(mess: string) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Thông báo',
            detail: mess,
        });
    }

    countStar(star: any) {
        this.selectedValue = star;
        ////console.log('Value of star', star);
    }

    

    submitOrder() {
        let { productName, name, phone, email, description, chassisNumber } =
            this.objCustomer;
        ////console.log(this.objCustomer)

        if (!name.trim()) {
            this.showWarn('Vui lòng nhập họ tên');
            return;
        }
        if (phone.trim() == ''){
            this.showWarn('Vui lòng nhập SĐT');
            return;
        }
        if (productName == "") {
            this.showWarn('Vui lòng chọn dòng xe');
            return;
        }
        if (chassisNumber == ""){
            this.showWarn('Vui lòng nhập số khung xe');
            return;
        }

        if (email != '' && !/^.*@.*\..*$/.test(email)) {
            this.showWarn('Vui lòng nhập đúng định dạng email');
            return;
        }
        if (this.selectedValue==0) {
            this.showWarn('Quý khách vui lòng đánh số sao để hoàn thành');
            return;
        }

        var satisfied = "";
        var unSatisfied = "";
        if (this.selectedValue >= 1 && this.selectedValue <= 3) {
            unSatisfied = "1";
        } else {
            satisfied = "1";
        }

        let isRepair = 0;
        if(this.service) isRepair=1;
        let data = {
            KeyApi: "",
            ModelName: productName,
            CustomerName: name,
            Emal: email,
            Tel: phone.replaceAll(" ", ""),
            IsRepairOrder: isRepair,
            Satisfied: satisfied,
            UnSatisfied: unSatisfied,
            ChassisNo: chassisNumber,
            Description: description,
            Point:this.selectedValue
        };
        ////console.log(data)

        this.commonService.loginBravo(this.user).subscribe((res: any) => {
            // console.log(res);

            this.commonService.getBravo([this.KeyApi], res.TokenKey).subscribe((res1: any) => {
                // console.log(res1);
                data.KeyApi = this.KeyApi.KeyApi;
                this.commonService.postBravo([data], res.TokenKey).subscribe((res2: any) => {
                    // this.showSuccess('Tiếp nhận góp ý thành công');
                    // console.log(res2);
                    this.showSuccess('Tiếp nhận góp ý thành công');
                })
            })
        })

        let serviceTemp: string = "";
        if (this.service) serviceTemp = "Dịch vụ hậu mãi " + productName
        else serviceTemp = "Xe mới "+productName

        var formData: any = new FormData();
        formData.append('CustomerName', name);
        formData.append('CustomerPhone', phone);
        formData.append('CustomerNote', description);
        formData.append('Rating', this.selectedValue);
        formData.append('ChassisNumber', chassisNumber);
        formData.append('Service', serviceTemp);
        formData.append('Type', 'gopy');
        this.commonService.postSurvey(formData).subscribe((res: any) => {
            // this.showSuccess('Tiếp nhận góp ý thành công');
        })

        this.objCustomer= { productName: "", name: "", phone: "", email: "", chassisNumber: "", description:"" }
        this.service=false;
        this.selectedValue=0;

        
    }
}