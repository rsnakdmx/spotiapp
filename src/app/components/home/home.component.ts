import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent 
{
    newSongs: any[] = [];
    errormsg: string;
    loading: boolean;
    error: boolean;
 
    constructor(private spotify: SpotifyService) 
    {
        this.error = false;
        this.loading = true;

        this.spotify.getNewReleases().subscribe( data => 
        { 
            this.newSongs = data
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
