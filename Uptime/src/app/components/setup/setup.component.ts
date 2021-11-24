import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetupService } from 'src/app/services/setup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  createSetUp : FormGroup;
  submit = false;
  load = false;

  constructor(private fb: FormBuilder, private setUpService: SetupService, private router: Router, private toastr: ToastrService) {
    this.createSetUp = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    });
   }

  ngOnInit(): void {
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
    this.setUpService.agregarSetUp(setUp).then(() => {
      console.log('SetUp registrados con exito');
      this.toastr.success('SETUP added', ':)');
      this.load = false;
      this.router.navigate(['/record']);
      console.log(setUp);
    }).catch(err => {
      console.log(err);
    });
  }
}
