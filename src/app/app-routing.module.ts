import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'users',component:UsersComponent},
{path:'products',component:ProductsComponent,
children:[
  {path:'discount',component:WithDiscountComponent},
  {path:'withoutDiscount',component:WithoutDiscountComponent}
]},
{path:'posts',component:PostsComponent},
{path:'login',component:LoginReactiveComponent},
// {path:'register',component:RegisterComponent},
{path:'register',component:RegisterReactiveComponent},

{path:'**',component:PageNotFoundComponent}




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
