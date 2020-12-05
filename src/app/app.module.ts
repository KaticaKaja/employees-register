import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { EmplListComponent } from './components/empl-list/empl-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { EmplComponent } from './components/empl/empl.component';
import { EmplPreviewComponent } from './components/empl-preview/empl-preview.component';
import { EmplInfoComponent } from './components/empl-info/empl-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    EmplListComponent,
    FilterPipe,
    EmplComponent,
    EmplPreviewComponent,
    EmplInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
