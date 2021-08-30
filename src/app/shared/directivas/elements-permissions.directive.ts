import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appElementsPermissions]'
})
export class ElementsPermissionsDirective implements OnInit {

  @Input('appElementsPermissions')
  roleToCheck!:string;

  constructor(private el:ElementRef, private temp:TemplateRef<any>, private viewContainer: ViewContainerRef) {


   }
  ngOnInit(): void {
    console.log("ROLES TO CHECK", this.roleToCheck);

    if(this.roleToCheck == "e29dae7e-cfbf-4ac8-afa3-545e4808ae20"){
      this.viewContainer.createEmbeddedView(this.temp);
    }else{
      this.viewContainer.clear();
    }
  }
}
