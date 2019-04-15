import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-showerror',
    templateUrl: './showerror.component.html',
    styles: []
})
export class ShowerrorComponent
{
    @Input() error:boolean;
    @Input() errormsg:string;
    
    constructor() { }
}
