import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-photo-gallery',
  templateUrl: './category-photo-gallery.component.html',
  styleUrls: ['./category-photo-gallery.component.scss']
})
export class CategoryPhotoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() content: any
  @Input() mt: any
  @Input() description: any



}
