import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.verificarTokenUrlCallBack();
  }

  verificarTokenUrlCallBack() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if(!!token) {
      this.spotifyService.definirAccessToken(token);
    }
  }



  abrirPaginaLogin() {
    window.location.href = this.spotifyService.obterUrlLogin();
  }
} 
