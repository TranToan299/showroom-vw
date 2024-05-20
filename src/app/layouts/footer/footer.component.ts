import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @Input() emailInput: string=''

    email:string = ""
    addresses = [
        { location: 'Số 120 Đ. Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh' },
        { location: 'QPXJ+CFM, Bình An, Quận 2, Thành phố Hồ Chí Minh' },
        { location: 'The Oxygen, Phòng 03-04-05, Lầu 2 TTTM, 628C Xa lộ Hà Nội, Quận 2, Thành phố Hồ Chí Minh 700000' },
    ]
    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        if(this.emailInput!=''){
            let a = (<HTMLImageElement>document.getElementById('mailto'))
            let span = (<HTMLImageElement>document.getElementById('mailText'))
    
            a.setAttribute("href", "mailto:"+this.emailInput);
            span.innerHTML=this.emailInput;
        }
        
    }

    subscribe() {
        let email: any = document.querySelector("#customer-subcribe-mail");
        // console.log(this.validateEmail(email.value));
        if (this.validateEmail(email.value)) {
            email.value="";
            this.showSuccess("Cảm ơn bạn đã đăng ký nhận thông tin từ Volkswagen Việt Nam")
        }
        else {
            this.showWarn("Email không đúng định dạng!");
        }
    }

    showWarn(mess: string) {
        this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: mess });
    }

    showSuccess(mess: string) {
        this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: mess });
    }

    validateEmail(email: string) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    showListPolicy(){
        let list: any = document.querySelector("#dropdown-list-policy");
        if(!list.classList.contains("show")){
            list.classList.add("show");
        }
        else{
            list.classList.remove("show");
        }
    }
}

