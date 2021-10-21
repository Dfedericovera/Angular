import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective
{
  @Input() appResaltar;
  @HostListener('mouseenter') onMouseEnter(){
    this.resaltarColor(this.appResaltar);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.resaltarColor('');
  }

  constructor(private elemento: ElementRef)
  {

  }

  private resaltarColor(color: string)
  {
    this.elemento.nativeElement.style.backgroundColor = color;
  }

}
