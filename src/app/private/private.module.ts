import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private.routing';

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    RouterModule
  ]
})
export class PrivateModule {}
