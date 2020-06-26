import { DimensionalService } from './services/dimensional.service';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { TravelLogsComponent } from './components/travel-logs/travel-logs.component';
import { ModalTravelComponent } from './components/details/modal-travel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    TravelLogsComponent,
    ModalTravelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [DimensionalService],
  bootstrap: [AppComponent],
  entryComponents: [ModalTravelComponent]
})
export class AppModule { }
