import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// EventEmitter - help to call parentComponent function through child
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	@Output() parentComponent:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
 
  }

  SendItem(){
  	let items={name:'kush', age:30}
  	this.parentComponent.emit(items)
  }

}
