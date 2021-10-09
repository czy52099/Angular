import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import {RouterModule, Routes} from "@angular/router";
import { SupportComponent } from './support/support.component';
import { MySonyComponent,MyDlogComponent } from './my-sony/my-sony.component';
import {MatCardModule} from "@angular/material/card";
import {MatSortModule} from "@angular/material/sort";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ja_JP } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ja from '@angular/common/locales/ja';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(ja);

const routes: Routes = [
  {path: 'support', component: SupportComponent },
  {path: 'mysony', component: MySonyComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MyDlogComponent,
    SupportComponent,
    MySonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    MatCardModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [ AppComponent, { provide: NZ_I18N, useValue: ja_JP } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
