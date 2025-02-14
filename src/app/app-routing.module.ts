import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/components/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'products',
        loadChildren: () => import('./features/products/product.module').then(m => m.ProductModule),
    },
    //   {
    //     path: 'cart',
    //     loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule),
    //   },
    //   {
    //     path: 'orders',
    //     loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule),
    //   },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'products',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        enableViewTransitions: true,
        scrollPositionRestoration: 'top' 
    })],
    exports: [RouterModule],
})

export class AppRoutingModule { }
