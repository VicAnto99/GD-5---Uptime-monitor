import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private firestore: AngularFirestore) { }

  agregarSetUp(setUp: any) : Promise<any> {
    return this.firestore.collection('Monitor').add(setUp);
  }
  getSetUp(): Observable<any>{
    return this.firestore.collection('Monitor').snapshotChanges();
  }
}
