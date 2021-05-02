import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

    title = 'angular-one-one';
    // that is parent component
    user = "";
    parentComponent(data)
    {
      console.log(data);
      this.user = data.user
    }

    users=[
    {
      name : 'Kush',
      age: 30,
      address : 'jaipur'
    },
    {
      name : 'Deepak',
      age: 31,
      address : 'Indor'
    },
    {
      name : 'Kapil',
      age: 32,
      address : 'Delhi'
    }

  ]
    getUserValue(value: any)
    {
        console.log(value)
    }

  //variable example
  name = 'kush khatri';
  age = 30

  //function
  getName(){
  	return 'kush khatri'
  }

  getAge(){
  	return this.age
  }

  //object
  obj={
  	name:'kush',
  	age:30,
  	company:'Jaipur rugs'
  }

  //array
  arr=['kush khatri', 'Navin patnayak', 'mahendra singh dhoni']

  a = 100;
  b=100

}
