import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  title: string = "Bem-vindo ao LAB510";
  subtitle: string = "Welcome to LAB510";
  
  constructor() {  }


}
