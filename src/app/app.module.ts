import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbDatepickerModule, NbTimepickerModule, NbAlertModule, NbButtonModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterfaceAffluenceComponent } from './interface-affluence/interface-affluence.component';
import { ToastComponent } from './toast/toast.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AffluencesDatepickerComponent } from './affluences-date-picker/affluences-date-picker.component';
import { AffluencesTimepickerComponent } from './affluences-time-picker/affluences-time-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    InterfaceAffluenceComponent,
    ToastComponent,
    AffluencesDatepickerComponent,
    AffluencesTimepickerComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    BrowserModule,
    NbThemeModule.forRoot(),
    NbAlertModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbEvaIconsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
