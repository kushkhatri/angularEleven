import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
//input is decorator (called function)
	
	@Input() hero

  constructor() { }

  ngOnInit(): void {
  }

}
