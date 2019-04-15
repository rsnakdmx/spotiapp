import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root' //Este decorador hace innecesario añadir el servicio en app.module.ts
})
export class SpotifyService {

    constructor(private http:HttpClient) { }

    getQuery(query:string)
    {
        const headers = new HttpHeaders(
        {
            'Authorization': 'Bearer BQBbiEr5coV_H8aG75zlMAr4QBxh4O2svOe4nXdbZtso1AX7b_bIhdLVZbgi8vdCRxM_64iAGyrrMQJgAFc'
        });
        const url = `https://api.spotify.com/v1/${ query }`;

        return this.http.get(url, { headers });
    }

    getNewReleases()
    {
        return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
    }

    getArtists(termino:string)
    {
        return this.getQuery(`search?q=${ termino }&type=artist`).pipe(map(data => data['artists'].items));
    }

    getArtist(id:string)
    {
        return this.getQuery(`artists/${ id }`);
    }

    getTopTracks(id:string)
    {
        return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(map(data => data['tracks']));
    }
}
