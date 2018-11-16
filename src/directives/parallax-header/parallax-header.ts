import { Directive } from '@angular/core';

/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[parallax-header]' // Attribute selector
})
export class ParallaxHeaderDirective {

  constructor() {
    console.log('Hello ParallaxHeaderDirective Directive');
  }

}
