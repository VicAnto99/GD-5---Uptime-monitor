import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private firestore: AngularFirestore) { }

  agregarSetUp(setUp: any) : Promise<any> {
    return this.firestore.collection('Monitor').add(setUp);
  }
}
