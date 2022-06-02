import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopNavigationComponent } from './top-navigation.component';

@NgModule({
  declarations: [
    TopNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavigationComponent
  ]
})
export class TopNavigationModule {}
