import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  record: any[] = [];

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.getRecord();
  }

  getRecord(){
    this.record = [];
    this.recordService.getRecord().subscribe(data => {
      data.forEach((element:any) => {
        console.log(element.payload.doc.data());
        this.record.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(data);
    });
  }
  deleteRecord(id: string){
    this.recordService.deleteRecord(id).then(() =>{
      console.log("Elimidao con exito");
      this.getRecord();
    }).catch(err => {
      console.log(err);
    });
    this.getRecord();
  }
}
