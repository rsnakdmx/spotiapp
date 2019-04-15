import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent 
{
    artists: any[] = [];
    errormsg: string;
    loading: boolean;
    error: boolean;

    constructor(private spotify:SpotifyService) { }

    buscar(termino:string)
    {
        this.error = false;
        this.loading = true;

        this.spotify.getArtists(termino).subscribe(data => 
        { 
            this.artists = data
            this.loading = false;
        }, 
        
        errorsender => 
        {
            this.error = true;
            this.loading = false;
            this.errormsg = errorsender.error.error.message;
        });
    }

}
