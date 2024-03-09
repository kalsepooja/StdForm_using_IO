import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../../const/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() studentArray !: Array<Istudent> 
  constructor() { }

  ngOnInit(): void {
  }

}
