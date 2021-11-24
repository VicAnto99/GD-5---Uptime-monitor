import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetupService } from 'src/app/services/setup.service';
import { ToastrService } from 'ngx-toastr';
import { RecordService } from 'src/app/services/record.service';

declare var M: any;

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  createSetUp : FormGroup;
  submit = false;
  load = false;
  setUp_firebase: any[] = [];
  record: any[] = [];

  constructor(private fb: FormBuilder, private setUpService: SetupService, private router: Router, private toastr: ToastrService, private recordService: RecordService) {
    this.createSetUp = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.getSetUp();
    this.getRecord();
  }

  addSetUp(){
    this.submit = true;
    this.load = true;
    if(this.createSetUp.invalid){
      this.load = false;
      return;
    }
    const setUp: any = {
      name: this.createSetUp.value.name,
      url: this.createSetUp.value.url,
      dateCreate: new Date(),
      dateUpdate: new Date()
    }
    const record: any = {
      name: this.createSetUp.value.name,
      estado: "ON",
      url: this.createSetUp.value.url,
      dateCreate: new Date(),
      dateUpdate: new Date()
    }
    this.setUpService.agregarSetUp(setUp).then(() => {
      console.log('SetUp registrados con exito');
      M.toast({
        html: 'SETUP created! :)'
      });
      this.getSetUp();
      this.getRecord();
      console.log(setUp);
      this.load = false;
      this.router.navigate(['/record']);
    }).catch(err => {
      console.log(err);
    });
    this.recordService.agregarRecord(record).then(() => {
      this.getSetUp();
      this.getRecord();
      this.load = false;
      this.router.navigate(['/record']);
    }).catch(err => {
      console.log(err);
    });
  }
  getSetUp(){
    this.setUpService.getSetUp().subscribe(data => {
      data.forEach((element:any) => {
        this.setUp_firebase = [];
        console.log(element.payload.doc.data());
        this.setUp_firebase.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(data);
    });
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
}
