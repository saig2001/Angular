import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { TmComponent } from './tm/tm.component';
import { FbmarketingComponent } from './fbmarketing/fbmarketing.component';
import { GplusmarketingComponent } from './gplusmarketing/gplusmarketing.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TmComponent,
    FbmarketingComponent,
    GplusmarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
