import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

import { NgJsonEditorModule } from 'ang-jsoneditor'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgJsonEditorModule,
    ClipboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
