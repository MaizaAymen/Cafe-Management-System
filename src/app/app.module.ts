import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FullComponent } from './layouts/sidebar/full/full.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ViewBillProductsComponent } from './src/app/material-component/view-bill-products/view-bill-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    HeaderComponent,
    SidebarComponent,
    FullComponent,
    DashbordComponent,
    ViewBillProductsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
