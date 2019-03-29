import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'parking-list',
        children: [
          {
            path: '',
            loadChildren: '../parking-list/parking-list.module#ParkingListPageModule'
          },
          { path: 'parking-add', loadChildren: '../parking-add/parking-add.module#ParkingAddPageModule' },
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapPageModule'
          }
        ]
      },
      {
        path: 'qrcode',
        children: [
          {
            path: '',
            loadChildren: '../qrcode/qrcode.module#QrcodePageModule'
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: '../setting/setting.module#SettingPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/parking-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/parking-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
