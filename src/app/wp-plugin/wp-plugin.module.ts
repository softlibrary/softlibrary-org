import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WpPluginRoutingModule } from './wp-plugin-routing.module';
import { WpPluginComponent } from './wp-plugin.component';
import { LayoutModule } from '../layout/layout.module';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    WpPluginComponent
  ],
  imports: [
    CommonModule,
    WpPluginRoutingModule,
    LayoutModule,
    NzGridModule
  ]
})
export class WpPluginModule { }
