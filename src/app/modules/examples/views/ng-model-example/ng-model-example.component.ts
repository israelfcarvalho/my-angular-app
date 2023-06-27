import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-model-example',
  templateUrl: './ng-model-example.component.html',
  styleUrls: ['./ng-model-example.component.scss']
})
export class NgModelExampleComponent implements OnInit {
  nameRF = new FormControl('')

  constructor(){}

  ngOnInit(): void {}

  onSubmitTDF(ngForm: NgForm){
    alert(JSON.stringify(ngForm.value))
    ngForm.reset()
  }
}
