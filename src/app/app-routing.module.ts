import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: '', redirectTo: 'gps', pathMatch: 'full'},
  { path: 'gps', loadChildren: './gps/gps.module#GpsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  // { path: 'parking-add', loadChildren: './parking-add/parking-add.module#ParkingAddPageModule' },
  // { path: 'parking-list', loadChildren: './parking-list/parking-list.module#ParkingListPageModule' },
  { path: 'parking-detail', loadChildren: './parking-detail/parking-detail.module#ParkingDetailPageModule' },
  // { path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule' },
  // { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
