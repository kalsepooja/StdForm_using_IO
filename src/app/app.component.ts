import { Component, OnInit } from '@angular/core';
import { Istudent } from './shared/const/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StdForm_using_IO';
  pname = '';
  pDescription = '';
  stdArray : Array<Istudent> =[
    {
      fname: 'jhon',
      lname: 'doe',
      email: 'jd@gmail.com',
      contact: 78738977897
    }
  ]
  constructor(){

  }

  ngOnInit(): void {
  
  };

  getStdData(stdObj: Istudent){
    console.log(stdObj);
    this.stdArray.push(stdObj)
  }

  onAddProduct(){
    let obj = {
      pname: this.pname,
      pDescription: this.pDescription
      }
      console.log(obj);
      
  }
}
