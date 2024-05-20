import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrls: ['./category-summary.component.scss']
})
export class CategorySummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() content: any
  @Input() title: string
}
