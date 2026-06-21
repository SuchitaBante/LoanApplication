import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../services/snackBar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _snackBar:SnackBarService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm)
{

  console.log(form.value)
  this._snackBar.openSnackBar('Loan Application Form Submitted Successfully...!!!')
  form.reset()
}
}
