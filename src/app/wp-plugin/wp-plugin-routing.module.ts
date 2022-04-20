import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WpPluginComponent } from './wp-plugin.component';

const routes: Routes = [{ path: '', component: WpPluginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WpPluginRoutingModule { }
