import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.verificarTokenUrlCallBack();
  }

  verificarTokenUrlCallBack() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if(!!token) {
      this.spotifyService.definirAccessToken(token);
      this.router.navigate(['/player']);
    } 
  }



  abrirPaginaLogin() {
    window.location.href = this.spotifyService.obterUrlLogin();
  }
} 
