import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  headerTitle!: string;
  headerIcon!: string;
  headerDescription!: string;

  // firstName: string = "";
  // lastName: string = "";
  // email: string = "";
  // phone: string = "";
  // address?: string = "";
  // notes?: string = "";

  initObj = {
    firstName: "jogn",
    lastName: 'joe',
    email: 'jogn_dow@gmail.com',
    phone: '1233456778',
    address: "space",
    notes: "black notebook",
    hobbies: []
  }


  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^0[2-9]\d{7,8}$/g)]),
    hobbies: new FormArray([]),
    address: new FormControl(null),
    notes: new FormControl(null)
  });


  constructor() {
    this.formGroup.setValue(this.initObj);

  }

  ngOnInit(): void {
    this.headerTitle = "Add New Customer Form";
    this.headerIcon = "fas fa-plus-circle";
    this.headerDescription = "Write customer details";

    this.formGroup.get('firstName')?.valueChanges.subscribe(x => {

    })
  }

  onSubmit({ value, valid }: { value: Customer, valid: boolean }) {
    console.log("value", value);
    console.log("valid", valid);
  }

  ngSubmit() {
    console.log("formGroup", this.formGroup);
  }

  onClear() {
    this.formGroup.reset(this.initObj);
  }

  onSetValue() {
    this.formGroup.setValue(this.initObj);
  }


  public get hobbiesArr(): AbstractControl[] {
    const rtn = this.formGroup.get('hobbies') as FormArray;
    return rtn.controls;
  }

  addHobbie() {
    const FGControls: { [key: string]: AbstractControl; } = {
      name: new FormControl(null),
      hoursPerWeek: new FormControl(null),
      description: new FormControl(null)
    };

    (<FormArray>this.formGroup.get('hobbies')).push(new FormGroup(FGControls))
  }

  deleteHobbie(i: number) {
    (<FormArray>this.formGroup.get('hobbies')).removeAt(i);
  }

}
