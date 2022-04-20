import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FooterComponent } from './footer/footer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzTypographyModule,
    NzDrawerModule,
    NzGridModule
 
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
