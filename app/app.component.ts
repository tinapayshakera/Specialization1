import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization1';
  // isDisabled = false;
  // inputValue = "";
  // numberValue = 0;

  //   sampleClick() {
  //     console.log(this.inputValue);
  // };
  // increaseValue(){
  //   this.numberValue++
  //   this.inputValue = this.numberValue.toString();
  // }
  // receiveAdd() {
  //   this.numberValue++
  //   this.inputValue = this.numberValue.toString();

  // }

  // receiveSubtract() {
  //   this.numberValue--
  //   this.inputValue = this.numberValue.toString();
  // }

  // receiveEvent() {
  //   console.log("test this app component");
  // }
  studentsList: Student[] = [
    {
      id: 0,
      lastName: "Penduko",
      firstName: "Pedro",
      age: 20,
      nationality: "Filipino",
      gender: "Male"
    },
    {
      id: 1,
      lastName: "Pen",
      firstName: "Ped",
      age: 21,
      nationality: "Filipino",
      degree: "Assassin",
      gender: "Female"
    },
    {
      id: 2,
      lastName: "Pen",
      firstName: "Ped",
      age: 22,
      nationality: "Filipino",
      degree: "Ninja",
      gender: "Male"
    },

  ]
}




