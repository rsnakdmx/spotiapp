import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-artista',
    templateUrl: './artista.component.html',
    styles: []
})
export class ArtistaComponent implements OnInit 
{
    artist: any = {};
    topTracks: any[] = [];
    errormsg: string;
    loading: boolean;
    error: boolean;

    constructor(private router:ActivatedRoute, private spotify:SpotifyService) 
    { 
        this.loading = true;
        this.router.params.subscribe(params => 
        { 
            this.getArtist(params['id']);
            this.getTopTracks(params['id']);
            this.loading = false;
        },
        
        errorsender => 
        {
            this.error = true;
            this.loading = false;
            this.errormsg = errorsender.error.error.message;
        });
    }

    ngOnInit() { }

    getArtist(id:string)
    {
        this.spotify.getArtist(id).subscribe(data => { this.artist = data });
    }

    getTopTracks(id:string)
    {
        this.spotify.getTopTracks(id).subscribe(data => { this.topTracks = data });
    }
}
