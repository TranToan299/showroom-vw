import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { backgroundCars, colorCars } from 'src/app/mocks/colorCars';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.scss'],
})
export class ProductBannerComponent {
  @Input() id: string;
  idBanner = ``;
  isExpandedExterior: boolean = false;
  isMobile: boolean; 
  @Input() subtitle: string;
  @Input() title: string;
  @Input() banner: string;
  @Input() bannerMobile?: string;
  @Input() listInfo: {
    // ImageUrl: string; // image
    // title: string; //header
    // content: string[]; // list
    // isVideo?: boolean;
    header: string;
    list: string[];
    image?: string;
    video?: string;
  }[];
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.idBanner = `banner${this.id}`;
    this.breakpointObserver.observe([
        Breakpoints.Handset,
        Breakpoints.Small
      ]).subscribe(result => {
        this.isMobile = result.matches;
      });
    // this.listInfo = this.listInfo.map(item => ({ ...item, isVideo: item.isVideo || false }));
  }
  togglePanelExterior() {
    this.isExpandedExterior = !this.isExpandedExterior;
    setTimeout(() => {
      let elemnet: any = document.querySelector('#' + this.idBanner);
      elemnet.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}
