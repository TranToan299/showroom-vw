import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner-photo-gallery',
  templateUrl: './owner-photo-gallery.component.html',
  styleUrls: ['./owner-photo-gallery.component.scss']
})
export class OwnerPhotoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any
  @Input() description: any
  @Input() link: any
  @Input() items: any
}
