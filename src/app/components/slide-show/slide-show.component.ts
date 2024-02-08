import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.css',
})
export class SlideShowComponent {
  @Input() movies!: any[];

  onMovieClick(movie: any) {}
  onSlidePrev() {}
  onSlideNext() {}
}
