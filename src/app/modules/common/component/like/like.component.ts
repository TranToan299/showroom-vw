import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('this.isTeramont', this.isTeramont)
  }
  @Input() isTeramont: any

}
