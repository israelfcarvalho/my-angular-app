import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface LazyLoadComponentBindings  extends OnChanges {
  context: string
  intanceEmitter: EventEmitter<string>
}

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements LazyLoadComponentBindings {
  @Input() context: string = ''
  @Output() intanceEmitter = new EventEmitter<string>()
  
  constructor(){}

  emitValue: string = ''
  onEmitValueChange(event: Event){
    const target = event.currentTarget as HTMLInputElement

    this.emitValue = target.value
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      console.log({change})
    }
  }

  onSubmit(event: SubmitEvent){
    this.intanceEmitter.emit(this.emitValue)
  }
}


@NgModule({
  declarations: [LazyLoadComponent],
  imports: [FormsModule, CommonModule]
})
export class LazyLoadComponentModule {}