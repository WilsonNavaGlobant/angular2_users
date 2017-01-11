import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './routes/app-route/app.component';
import { HeroesComponent }  from './routes/heroes-route/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './routes/dashboard-route/dashboard.component';
import { HeroService } from './services/hero.service';

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
    //COMPONENTS
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ],
})


export class AppModule { }
