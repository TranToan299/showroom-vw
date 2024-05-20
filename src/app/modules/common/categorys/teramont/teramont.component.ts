import { PAGE_META_DESCRIPTION } from './../../../../constants/app-constants';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from "src/app/services/apis/common.service";
import { Meta } from '@angular/platform-browser'
import {Title} from "@angular/platform-browser";
import { PAGE_TITLE } from 'src/app/constants/app-constants';
@Component({
    selector: 'app-teramont',
    templateUrl: './teramont.component.html',
    styleUrls: ['./teramont.component.scss']
})
export class TeramontComponent implements OnInit, OnDestroy {

    constructor(
        private commonService: CommonService,
        private titleService:Title,
        private meta: Meta
    ) { this.titleService.setTitle(`${PAGE_TITLE.teramont} | Volkswagen Việt Nam`);  }
    device: string = "";
    brochure: any = {
        component: "app-category-brochure",
        name: "Tải Brochure",
        link: 'https://www.fshare.vn/file/QYEQAXIIR2P4'
    }

    changeWidth() {
        var w = window.innerWidth;
        var teramontBanner = (<HTMLImageElement>document.getElementById("teramontBanner"));
        if (w <= 576) {
            if (this.device != "mobile") {
                teramontBanner.src = './assets/images/cate/teramont/bannernew.jpg';
            }
            this.device = "mobile";
        }
        else if (w <= 820) {
            if (this.device != "tablet") {
                teramontBanner.src = './assets/images/cate/teramont/bannernew.jpg';
            }
            this.device = "tablet";
        }
        else {
            if (this.device != "pc") {
                teramontBanner.src = './assets/images/cate/teramont/bannernew.jpg';
            }
            this.device = "pc";
        }
    }

    ngOnInit(): void {
        this.changeWidth();
        window.addEventListener("resize", this.changeWidth);
        window.addEventListener('scroll', this.onScroll.bind(this))

        // scroll top -- khó hiểu 
        window.scrollTo({ top: 0, })
        // update meta
        this.commonService.getCategoryById(3).subscribe((data: any) => {
            this.meta.updateTag({ name: 'description', content: PAGE_META_DESCRIPTION.teramont });
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
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
    onScroll() {

        var y = window.pageYOffset || document.documentElement.scrollTop;
        let eleStart: any = document.querySelector('.title-discover-main')
        let eleEnd: any = document.querySelector('.endTabview')

        let yEleStart = eleStart.offsetTop
        let yEleEnd = eleEnd.offsetTop

        // console.log(y, yEleStart, eleStart)
        let views = document.querySelectorAll('.tab-view .view-item ')
        let tabs: any = document.querySelectorAll('.tab-view .tab-item')
        let tab: any = document.querySelector('.tab-view .tab')
        if (y + 300 >= yEleStart) {
            tab.style.display = 'flex'
        } else {
            tab.style.display = 'none'
        }

        if (y + 50 >= yEleEnd) {
            tab.style.display = 'none'
        }
        views.forEach((item: any, index: number) => {
            let yItem = item.offsetTop
            // console.log(y, yItem)
            // console.log('yItem', yItem)
            if (y + 300 >= yItem) {
                let tabActive: any = document.querySelector('.tab-item.active')
                if (tabActive) tabActive.classList.remove("active")
                tabs[index].classList.add("active");
            }
        })
    }
    clickTab(e: any) {
        let tabActive: any = document.querySelector('.tab-item.active')
        if (e.target.dataset.index != tabActive.dataset.index && tabActive) tabActive.classList.remove("active");
        let index = parseInt(e.target.dataset.index)
        // console.log('index', index)
        let views = document.querySelectorAll('.view-item')
        views[index].scrollIntoView({ behavior: 'smooth' });
    }

    // comfort
    imageComfort: string = './assets/images/cate/teramont/heat.jfif'
    onTabOpenComfort(e: any) {
        let index = e.index
        if (index == 0) {
            this.imageComfort = './assets/images/cate/teramont/heat.jfif'
        } else if (index == 1) {
            this.imageComfort = './assets/images/cate/teramont/17.jfif'
        } else if (index == 2) {
            this.imageComfort = './assets/images/cate/teramont/wireless.jfif'
        }
    }
    // tech
    imageTech: string = './assets/images/cate/teramont/tech-led.jfif'
    onTabOpenTech(e: any) {
        let index = e.index
        if (index == 0) {
            this.imageTech = './assets/images/cate/teramont/tech-led.jfif'
        } else if (index == 1) {
            this.imageTech = './assets/images/cate/teramont/tech-tech.jfif'
        } else if (index == 2) {
            this.imageTech = './assets/images/cate/teramont/tech-motion.jfif'
        } else if (index == 3) {
            this.imageTech = './assets/images/cate/teramont/tech-relax.jfif'
        } else if (index == 4) {
            this.imageTech = './assets/images/cate/teramont/tech-usb.jfif'
        }
    }
    imageTech2: string = './assets/images/cate/teramont/tech-system-journeys.jfif'
    onTabOpenTech2(e: any) {
        let index = e.index
        if (index == 0) {
            this.imageTech2 = './assets/images/cate/teramont/tech-system-journeys.jfif'
        } else if (index == 1) {
            this.imageTech2 = './assets/images/cate/teramont/tech-camera.jfif'
        } else if (index == 2) {
            this.imageTech2 = './assets/images/cate/teramont/tech-car-body.jfif'
        } else if (index == 3) {
            this.imageTech2 = './assets/images/cate/teramont/tech-belt.jfif'
        } else if (index == 4) {
            this.imageTech2 = './assets/images/cate/teramont/tech-safe.jfif'
        } else if (index == 5) {
            this.imageTech2 = './assets/images/cate/teramont/tech-monitor.jfif'
        }
    }

    imageExterior: string = './assets/images/cate/teramont/exterior-wheel.jfif'
    onTabOpenExterior(e: any) {
        let index = e.index
        if (index == 0) {
            this.imageExterior = './assets/images/cate/teramont/exterior-wheel.jfif'
        } else if (index == 1) {
            this.imageExterior = './assets/images/cate/teramont/exterior-led.jfif'

        }

    }
}