import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { PccodesComponent } from './pccodes/pccodes.component';
import { PccodeComponent } from './pccodes/pccode/pccode.component';
import { PccodeListComponent } from './pccodes/pccode-list/pccode-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PccodesComponent,
    PccodeComponent,
    PccodeListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
