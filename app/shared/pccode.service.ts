import { Injectable } from '@angular/core';
import { Pccode } from './pccode.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PccodeService {
  formData : Pccode;
  constructor(private firestore:AngularFirestore) { }

  getEmployees(){
    return this.firestore.collection('PCCode').snapshotChanges();
    }
}
