import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from '@shared/navigation';
import { TopNavigationModule } from '@shared/top-navigation';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TopNavigationModule,
    NavigationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
