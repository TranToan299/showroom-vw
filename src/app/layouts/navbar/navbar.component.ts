import { backgroundCars } from 'src/app/mocks/colorCars';
import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @Input() color!: string
    @Input() hiddenBellow!: string


    constructor(private route: Router) { }
    ngOnInit(): void {
        this.initNavbar()
        window.addEventListener('scroll', this.onScroll.bind(this))
        //console.log('hiddenBellow', this.hiddenBellow)
        //console.log('color', this.color)
    }
    lastScrollTop: number = 0;
    submenu: any = {
        name: 'Chủ sở hữu và người dùng',
        links: [
            { name: 'Tất cả', link: '/owner' },
            { name: 'Sữa chữa và dịch vụ', link: '/owner/dich-vu' },
            { name: 'Bảo hành', link: '/owner/bao-hanh' },
            { name: 'Phụ tùng', link: '/owner/phu-tung' },
            { name: 'Dầu động cơ và các chất lưu', link: '/owner/dong-co' },
            { name: 'Mâm và lốp xe', link: '/owner/mam-va-lop' },
            {
                name: 'Phụ kiện',
                link: '',
                deepSubmenu: [
                    { name: 'Tất cả', link: '/owner/phu-kien' },
                    { name: 'Chuyên chở', link: '/owner/chuyen-cho' },
                    { name: 'Phong cách sống', link: '/owner/phong-cach-song' },
                ]
            },
            { name: 'Thông tin hữu ích', link: '/owner/thong-tin' },
            { name: 'Đặt hẹn dịch vụ', link: 'https://cont6.devworksngwsa.de/app/dccforms/vw-vn/service/en' },
            { name: 'Đèn cảnh báo', link: '/owner/warning-light' },

        ]
    }
    deepSubmenu: any = [
    ]
    openSubmenu(e: any) {
        let nameSubmenu = e.target.closest('.item-link').dataset.submenu
        if (nameSubmenu == 'product') {
            this.submenu = {
                name: 'Sản phẩm',
                links: [
                    // { name: 'Touareg Elegance', link: '/product/touareg-elegance'},
                    // { name: 'Touareg Luxury', link: '/product/touareg-luxury'},
                    //{ name: 'Virtus', link: '/product/virtus'},
                    { name: 'Volkswagen Teramont X', link: '/product/teramont_x'},
                    { name: 'Volkswagen Touareg', link: '/product/touareg'},
                    { name: 'Volkswagen Teramont', link: '/product/teramont'},
                    { name: 'Volkswagen The New Tiguan', link: '/product/tiguan'},
                    // { name: 'Tiguan', link: '/product/tiguanallspace'},
                    // { name: 'Passat', link: '/product/passat'},
                    { name: 'Volkswagen Virtus', link: '/product/virtus'},
                    { name: 'Volkswagen T-Cross', link: '/product/tcross' },
                    { name: 'Volkswagen Polo', link: '/product/polo'},
                    { name: 'Volkswagen Viloran', link: '/product/viloran'},
                    { name: 'Volkswagen Virtual studio', link: 'https://virtualstudio.vw.com.vn/'},
                    { name: 'Đặt hàng sản phẩm', link: '/product/deposit'},
                ]
            }
        } else if (nameSubmenu == 'own-user') {
            this.submenu = {
                name: 'Chủ sở hữu và người dùng',
                links: [
                    { name: 'Tất cả', link: '/owner' },
                    { name: 'Sữa chữa và dịch vụ', link: '/owner/dich-vu' },
                    { name: 'Bảo hành', link: '/owner/bao-hanh' },
                    { name: 'Phụ tùng', link: '/owner/phu-tung' },
                    { name: 'Dầu động cơ và các chất lưu', link: '/owner/dong-co' },
                    { name: 'Mâm và lốp xe', link: '/owner/mam-va-lop' },
                    {
                        name: 'Phụ kiện',
                        link: '',
                        deepSubmenu: [
                            { name: 'Tất cả', link: '/owner/phu-kien' },
                            { name: 'Chuyên chở', link: '/owner/chuyen-cho' },
                            { name: 'Phong cách sống', link: '/owner/phong-cach-song' },
                        ]
                    },
                    { name: 'Thông tin hữu ích', link: '/owner/thong-tin' },
                    { name: 'Đặt hẹn dịch vụ', link: 'https://cont6.devworksngwsa.de/app/dccforms/vw-vn/service/en' },
                    { name: 'Đèn cảnh báo', link: '/owner/warning-light' },
                    { name: 'Thông tin triệu hồi', link: '/owner/recall' },
        
                ]
            }
        }
        let submenu: any = document.querySelector('#submenu')
        submenu.style.visibility = 'visible'
        submenu.style.transform = 'translateX(0)'
        submenu.style.webkitTransform = 'translateX(0)'
        submenu.style.msTransform = 'translateX(0)'

    }
    closeSubmenu() {
        let submenu: any = document.querySelector('#submenu')
        submenu.style.transform = 'translateX(100%)'
        submenu.style.webkitTransform = 'translateX(100%)'
        submenu.style.msTransform = 'translateX(100%)'
        submenu.style.visibility = 'hidden'
        this.deepSubmenu = []
    }

    openDeepSubmenu() {
        this.deepSubmenu = [
            { name: 'Tất cả', link: '/owner/phu-kien' },
            { name: 'Chuyên chở', link: '/owner/chuyen-cho' },
            { name: 'Phong cách sống', link: '/owner/phong-cach-song' },
        ]
    }

    openMenu() {
        let menu: any = document.querySelector('#menu')
        // console.log(menu)
        menu.style.transform = 'translateX(0px)'
        menu.style.webkitTransform = 'translateX(0px)'
        menu.style.msTransform = 'translateX(0px)'
    }
    closeMenu() {
        let menu: any = document.querySelector('#menu')
        menu.style.transform = 'translateX(-100%)'
        menu.style.webkitTransform = 'translateX(-100%)'
        menu.style.msTransform = 'translateX(-100%)'
        this.closeSubmenu()
    }
    onClickLink(link: string) {
        let menu: any = document.querySelector('#menu')
        menu.style.display = 'none'
        setTimeout(() => {
            if (link.includes('#news')) {
                let news: any = document.querySelector('#news')
                if (news) news.scrollIntoView({ behavior: 'smooth' });
            }

        }, 200)
        let wrapSubMenu: any = document.querySelector('.wrapSubMenu')
        wrapSubMenu.style.display = 'none'
    }
    initNavbar() {
        // console.log(this.color)
        let lineLeft: any = document.querySelector("#navbar .line-left")
        let lineRight: any = document.querySelector("#navbar .line-right")
        let logo: any = document.querySelector('#navbar .logo-center img')
        let iconMenu: any = document.querySelector('#navbar .wrapBtn img')
        let background: any = document.querySelector("#navbar .background");
        if (this.color == 'white') {
            lineLeft.style.borderColor = '#fff'
            lineRight.style.borderColor = '#fff'
            logo.src = './assets/images/logoWhite.svg'
            iconMenu.src = './assets/images/menuWhite.svg'
            background.classList.add("gradient-background");
        } else {
            lineLeft.style.borderColor = 'rgb(0, 30, 80)';
            lineRight.style.borderColor = 'rgb(0, 30, 80)';
            logo.src = './assets/images/logoBlue.svg';
            iconMenu.src = './assets/images/menuBlue.svg';
        }
    }
    onScroll() {
        let navbar: any = document.querySelector("#navbar")
        let bottomBar: any = document.querySelector("#navbar .bottom")
        let wrapBtn: any = document.querySelector("#navbar .wrapBtn")
        let background: any = document.querySelector("#navbar .background")
        let lineLeft: any = document.querySelector("#navbar .line-left")
        let lineRight: any = document.querySelector("#navbar .line-right")
        let logo: any = document.querySelector('#navbar .logo-center img')
        let iconMenu: any = document.querySelector('#navbar .wrapBtn img')
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > this.lastScrollTop) {
            // console.log('downscroll')
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                bottomBar.classList.add("bottom-hide");
                wrapBtn.classList.add("background-white");
                iconMenu.src = './assets/images/menuBlue.svg'
                iconMenu.style.color = '#000';
                background.classList.remove("gradient-background");

                
            } else {
                bottomBar.classList.add("bottom-hide");
                wrapBtn.classList.remove("background-white");
                iconMenu.style.color = '#fff';

                if(this.color=='white'){
                    //console.log('black gradient');
                    background.classList.add("gradient-background");
                }
            }

        } else {
            // console.log('upscroll')
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                
                if (this.hiddenBellow != 'hidden') {
                    bottomBar.classList.remove("bottom-hide");
                    background.classList.remove("gradient-background");
                    wrapBtn.classList.add("background-white");
                }
                lineLeft.style.borderColor = 'rgb(0, 30, 80)'
                lineRight.style.borderColor = 'rgb(0, 30, 80)'
                logo.src = './assets/images/logoBlue.svg'
                iconMenu.src = './assets/images/menuBlue.svg'
                iconMenu.style.color = '#000'
            } else {
                
                bottomBar.classList.remove("bottom-hide");
                
                wrapBtn.classList.remove("background-white");
                iconMenu.style.color = '#fff'
                if (this.color == 'white') {
                    lineLeft.style.borderColor = '#fff'
                    lineRight.style.borderColor = '#fff'
                    logo.src = './assets/images/logoWhite.svg'
                    iconMenu.src = './assets/images/menuWhite.svg'
                    background.classList.add("gradient-background");
                    
                } else {
                    lineLeft.style.borderColor = 'rgb(0, 30, 80)'
                    lineRight.style.borderColor = 'rgb(0, 30, 80)'
                    logo.src = './assets/images/logoBlue.svg'
                    iconMenu.src = './assets/images/menuBlue.svg'
                    background.classList.remove("gradient-background");
                }
            }

            
        }
        this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    }
    openSubMenu() {
        let wrapSubMenu: any = document.querySelector('.wrapSubMenu')
        wrapSubMenu.style.display = 'block'
    }





}

export class Menu {
    link: string = ''
    isParent: boolean = false
    name: string = ''
    parentId: number = 0
    menuId: number = 0
}
