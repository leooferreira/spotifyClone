import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environments';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.spotifyApi = new Spotify();
   }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientID}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback() {
    if(!window.location.hash)
      return '';

    const params = window.location.href.substring(1).split('&');
    return params[0].split('=')[1];

  }

  definirAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
