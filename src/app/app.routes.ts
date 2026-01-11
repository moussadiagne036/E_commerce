import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent: () => import ('./pages/login/login').then(m => m.login),
            

        
    },
    {
         path:'register',
        loadComponent: () => import ('./pages/register/register').then(m => m.register),
    },
    {
        path:``,
        loadComponent: () => import ('./main-layout').then(m => m.MainLayout),   
         canActivate: [], 
        children : [
            
            {   path:'products',
                loadComponent: () => import ('./pages/products/products').then(m => m.products),
            },
            {   path:'profile',
                loadComponent: () => import ('./pages/profile/profile').then(m => m.profile),
            },
            {   path:'cart',
                loadComponent: () => import ('./pages/cart/cart').then(m => m.cart),
            }
        ]
    },
];