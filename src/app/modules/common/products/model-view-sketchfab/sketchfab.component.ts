import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core'
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router'
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'view-sketch-fab',
  templateUrl: './sketchfab.component.html',
  styleUrls: ['./sketchfab.component.css'],
})
export class SketchFabComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log(this.products)
    this.color = this.color || '#2b2724';
    console.log('color', this.color)
    let id = this.products.filter(p => p.color == this.color)[0].id!;
    this.productSelect = 'https://sketchfab.com/models/' + id + '/embed?autostart=1&camera=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_theme=dark'
    console.log(this.productSelect)
    this.productSelect = 'https://www.trendmotor.vn/virtualstudio';
    // show loading blue
    setTimeout(() => {
      let imgLoading: any = document.querySelector('.imgLoading')
      // let iframe: any = document.querySelector('.iframe')
      imgLoading.src = './assets/images/loading.jpg'
    }, 4000)
  }
  public colors: string[] = ['#2b2724', '#204674', '#f1f0f0', '#bc1515', '#635e67']
  public products: Product[] = [
    new Product({ color: '#2b2724', id: 'aeb82e15ec4c44c1afb30ba7d869108c', name: 'Teramont', hidden: false }),
    new Product({ color: '#204674', id: '9541b10c51f549a5bf920af56684c47d', name: 'Teramont', hidden: true }),
    new Product({ color: '#f1f0f0', id: 'b054f750627c40268356ed77b5b4570c', name: 'Teramont', hidden: true }),
    new Product({ color: '#bc1515', id: 'd673222f63304be7807a79bacc50cc82', name: 'Teramont', hidden: true }),
    new Product({ color: '#635e67', id: '5385e738459b4ff2b93f43add4b0e395', name: 'Teramont', hidden: true }),
  ]

  @ViewChild('iframe') iFrame!: ElementRef

  public productSelect: string = ''
  public responsiveOptions: any

  changeColor(color: string) {
    console.log('change color', color);
    // this.redirectTo('/test-3d-sketch?color=' + color)
    this.color = color;
    this.route.navigateByUrl('/3d-viewer?color=' + color)
    this.ngOnInit()
    // Redirect the user
  }
  redirectTo(uri: string) {
    console.log(uri)
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.route.navigate([uri]));
  }

  public color: any

  constructor(private route: Router, private activeRoute: ActivatedRoute) {

  }
  ngAfterViewInit(): void {
    const ifram = document.getElementById('iframe');
    console.log(ifram)
  }
}
