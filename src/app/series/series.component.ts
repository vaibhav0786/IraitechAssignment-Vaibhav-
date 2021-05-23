import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  seriesForm: FormGroup;
  value: number;
  ans: number;

  _mobileNumberList:Array<mobileDetails>;
  _mobile:mobileDetails;
  constructor(
    private formbuilder: FormBuilder,
    private router:Router

  ) { }

  seriesNumber: number[] = [2, 3, 10, 15, 26, 35, 50, 63]

  buttons: {
    id: number,
    color: string
  }[] = [
      { id: 0, color: 'grey' }
    ]

  ngOnInit() {
    this._mobileNumberList=new Array<mobileDetails>();
    this._mobile=new mobileDetails();
    this._mobile.phoneNumber='';
    this._mobileNumberList.push(this._mobile);

    console.log(this._mobileNumberList);
  }

  //Question 1
  findNumber() {
    console.log("print nubmer", this.value);
    //difference between the even no is of 8th table
    this.ans = this.seriesNumber[this.value]
    if (this.value % 2 == 0) {
      if (this.value == 8) {
        this.ans = this.seriesNumber[6] + 32
      }
    }
    console.log("ans", this.ans);

  }



  //Question2
  addButton() {
    this.buttons.push({
      id: this.buttons.length,
      color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    })
  }

  moveToHome(){
    this.router.navigate(['home'])
  }


//Question3
  AddAnotherPhoner()
  {
    this._mobile=new mobileDetails();
    this._mobile.phoneNumber='';
    this._mobileNumberList.push(this._mobile);
  }

  Delete(obj)
  {
    const index: number = this._mobileNumberList.indexOf(obj);
    if (index !== -1) {
        this._mobileNumberList.splice(index, 1);
    }   
  }
  Print()
  {
    console.log( this._mobileNumberList);
  }
}

export class mobileDetails
{
  phoneNumber:string='';
}

