import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const Routes: Routes = [
    {
        path: 'home',
        loadChildren: async () => (await import('./pages/home/home.module')).HomeModule
    },
    {
        path: 'profile',
        loadChildren: async () => (await import('./pages/profile/profile.module')).ProfileModule
    },
    {
        path: 'content',
        loadChildren: async () => (await import('./pages/content/content.module')).ContentModule
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(Routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
