import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

Model: Employee;
ngOnInit(){
this.Model = new Employee();
this.Model.EmpName ="";
this.Model.Location='';
this.Model.Email='';
this.Model.Mobile;
}

public onFormSubmit(emp:Employee){
  this.Model = emp.value;
  
    console.log(this.Model);
}

}
