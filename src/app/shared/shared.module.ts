import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

/* layouts */
import { MainNavComponent } from '../layout/main-nav/main-nav.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { TopNavComponent } from '../layout/top-nav/top-nav.component';

/* pages */
import { HomeComponent } from '../features/pages/components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../core/pipes/FgFilterPipe';

@NgModule({
    declarations: [
        MainNavComponent,
        TopNavComponent,
        SideNavComponent,
        HomeComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        SearchPipe,
        
        MainNavComponent,
        TopNavComponent,
        SideNavComponent,
        HomeComponent
    ]
})

export class SharedModule { }