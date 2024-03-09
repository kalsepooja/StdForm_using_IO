import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istudent } from '../../const/std';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
@ViewChild("fname") fname !: ElementRef;
@ViewChild("lname") lname !: ElementRef;
@ViewChild("email") email !: ElementRef;
@ViewChild("contact") contact !: ElementRef;

@Output() stdData: EventEmitter<Istudent> = new EventEmitter<Istudent>()

  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(){
    let obj:Istudent = {
      fname: this.lname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
    };

    if(!Object.values(obj).includes('')){
      console.log(obj);     
      this.stdData.emit(obj)
     
    }
  }

}
