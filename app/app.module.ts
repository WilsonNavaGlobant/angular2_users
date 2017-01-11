import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './routes/app-route/app.component';
import { HeroesComponent }  from './routes/heroes-route/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './routes/dashboard-route/dashboard.component';
import { UserDetailModalComponent } from './components/user-detail-modal/user-detail-modal.component';
import { UserService } from './services/user.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    //ROUTES
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    UserDetailModalComponent,
    //COMPONENTS
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ UserService ],
})


export class AppModule { }
