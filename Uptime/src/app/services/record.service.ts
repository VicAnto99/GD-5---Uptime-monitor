import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private firestore: AngularFirestore) { }

  agregarRecord(record: any) : Promise<any> {
    return this.firestore.collection('Record').add(record);
  }
  getRecord(): Observable<any>{
    return this.firestore.collection('Record', ref => ref.orderBy('dateCreate', 'asc')).snapshotChanges();
  }
  deleteRecord(id: string) : Promise<any> {
    return this.firestore.collection('Record').doc(id).delete();
  }
}
