import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-summon',
  templateUrl: './owner-summon.component.html',
  styleUrls: ['./owner-summon.component.scss'],
})
export class OwnerSummonComponent implements OnInit {
  constructor() {}

  content: any = [
    {
        component: "app-category-main-title",
        title: "Thông tin triệu hồi"
    },
]

  ngOnInit(): void {}
}
