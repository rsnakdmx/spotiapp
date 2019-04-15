import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent
{
    @Input() items:any[] = [];
    
    constructor(private router:Router) { }

    viewArtist(item: any)
    {
        let idArtist;

        if (item.type === "artist")
            idArtist = item.id;
        
        else
            idArtist = item.artists[0].id;
        
        this.router.navigate(['/artist', idArtist]);
    }
}
