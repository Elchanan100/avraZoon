import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadrComponent } from './comps/general/headr/headr.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { NavbeastsPanelComponent } from './comps/general/navbeasts-panel/navbeasts-panel.component';
import { NavbeastCardComponent } from './comps/general/navbeast-card/navbeast-card.component';
import { BeastCardComponent } from './comps/general/beast-card/beast-card.component';
import { BirdsPanedComponent } from './comps/general/birds-paned/birds-paned.component';
import { BirdCardComponent } from './comps/general/bird-card/bird-card.component';
import { WildsPanelComponent } from './comps/general/wilds-panel/wilds-panel.component';
import { WildCardComponent } from './comps/general/wild-card/wild-card.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { FooterComponent } from './comps/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadrComponent,
    NavComponent,
    NavbeastsPanelComponent,
    NavbeastCardComponent,
    BeastCardComponent,
    BirdsPanedComponent,
    BirdCardComponent,
    WildsPanelComponent,
    WildCardComponent,
    PaginatorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
