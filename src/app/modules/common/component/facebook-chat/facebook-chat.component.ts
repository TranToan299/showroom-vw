import { Component, Input, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-facebook-chat',
  templateUrl: './facebook-chat.component.html',
  styleUrls: ['./facebook-chat.component.scss'],
})
export class FacebookChatComponent implements OnInit {
  constructor(
    private facebookService: FacebookService,
  ) {}

  ngOnInit(): void {}

  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v3.2' };
    this.facebookService.init(initParams);
  }
}
