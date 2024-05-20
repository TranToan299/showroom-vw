import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-reference',
  templateUrl: './category-reference.component.html',
  styleUrls: ['./category-reference.component.scss']
})
export class CategoryReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() description: any
  @Input() link: any
  @Input() mt: any



}
