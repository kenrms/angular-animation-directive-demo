import { Directive, AfterViewInit, ElementRef, Input, OnChanges } from '@angular/core';
import { AnimationBuilder, AnimationPlayer } from '@angular/animations';

import { AppAnimations } from './animations';


@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective implements AfterViewInit, OnChanges {

  player: AnimationPlayer | undefined;
  private eleAnimations = '';
  private viewInitialized = false;

  @Input()
  set eleAnimation(elementAnimation: string) {
    if (elementAnimation) {
      this.eleAnimations = elementAnimation;
    }
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.animate();
  }

  ngOnChanges(): void {
    if (this.viewInitialized) {
      this.animate();
    }
  }

  animate(): void {
    if (!this.eleAnimations) {
      return;
    }

    if (this.player) {
      this.player.destroy();
    }

    if (AppAnimations[this.eleAnimations]) {
      const metaData = AppAnimations[this.eleAnimations];
      const factory = this.builder.build(metaData);
      const player = factory.create(this.el.nativeElement);
      player.play();
    }
    else {
      throw new Error(`Invalid animation "${this.eleAnimations}"`);
    }
  }
}
