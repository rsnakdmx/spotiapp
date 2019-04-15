import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styles: []
})
export class LoadingComponent
{
    @Input() loading:boolean;

    constructor() { }
}
