import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  routes: Array<string> = []

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    

      this.activatedRoute.data.subscribe({
        next: data => {
          this.routes = data['routes']
        }
      })
  }
}
