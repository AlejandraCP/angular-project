import {Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
@Directive({
  selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {}
  // declarar plan: se declara la variable como tipo input, ese input tambien se agrega a import
  @Input('resaltar') plan:string = '';
  ngOnInit() {
    if (this.plan === 'pagado') {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}
