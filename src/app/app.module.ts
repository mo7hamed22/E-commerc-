import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Bootstrab


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OddPipe } from './odd.pipe';
import { DataComponentComponent } from './data-component/data-component.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    OddPipe,
    DataComponentComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    WithDiscountComponent,
    WithoutDiscountComponent,
    LoginComponent,
    RegisterComponent,
    LoginReactiveComponent,
    RegisterReactiveComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//start with it 
})
export class AppModule { }
