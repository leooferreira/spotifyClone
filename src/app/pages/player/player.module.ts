import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { playerRotas } from './player.routes';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRotas),
  ]
})
export class PlayerModule { }
