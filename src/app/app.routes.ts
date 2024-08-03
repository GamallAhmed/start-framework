import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfoloiComponent } from './portfoloi/portfoloi.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent, title: "home" },
  { path: 'about', component: AboutComponent, title: "about" },
  { path: 'portfolio', component: PortfoloiComponent, title: "portfolio" },
  { path: 'contact', component: ContactComponent, title: "contact" },
  { path: '**',component:NotFoundComponent,title:'Error' }

];
