import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appDemodirective]'
})
export class DemodirectiveDirective {

  constructor(Element: ElementRef) 
  {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive.";
 }

}
