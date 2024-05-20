import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonService } from 'src/app/services/apis/common.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit {
  @Input() public qrStatus: boolean;
  @Input() public qrUrl: string;
  @Input() public accountNumber: string;
  subscription: Subscription;

  constructor(
    private messageService: MessageService,
    private myService: CommonService
  ) {}

  ngOnInit(): void {
    this.subscription = timer(0, 5000)
      .pipe(
        switchMap(() => this.myService.checkOrderStatus(this.accountNumber))
      )
      .subscribe((res) => {
        if (res.Status == 1 || res.Status == 2) {
          this.isShowQR = false;
          this.showSuccess(
            'Thanh toán thành công! Quý khách vui lòng kiểm tra email để nhận thông tin chi tiết!'
          );
          this.subscription.unsubscribe();
        }
      });
  }

  showSuccess(mess: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: mess,
    });
    let toast: any = document.querySelector('.toast-thank');
    toast.classList.toggle('hidden');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.display = changes.qrStatus.currentValue;
    this.isShowQR = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  display: boolean = true;
  isShowSuccess = false;
  isShowQR = false;
}
