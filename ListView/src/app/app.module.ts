import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { GroupByPipe } from 'src/pipes/group-by.pipe';
import { ShortenPipe } from 'src/pipes/shorten.pipe';

@NgModule({
  declarations: [AppComponent, GroupByPipe, ShortenPipe],
  imports: [BrowserModule, ListViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
