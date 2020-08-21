import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eleAnimation = 'slide_in_left';

  changeAnim(newAnim: string): void {
    this.eleAnimation = newAnim;
  }
}
