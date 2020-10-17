import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[showOnPermission]'
})
export class ShowOnPermissionDirective implements OnInit {

  @Input('showOnPermission') permission: string; // Required permission passed in
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

}
