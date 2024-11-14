import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { playerRotas } from './player.routes';
import { PainelEsquerdoComponent } from '../../components/painel-esquerdo/painel-esquerdo.component';



@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRotas),
  ]
})
export class PlayerModule { }
