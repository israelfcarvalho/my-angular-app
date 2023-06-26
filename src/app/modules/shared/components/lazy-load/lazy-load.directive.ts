import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges, ViewContainerRef } from '@angular/core';
import { LazyLoadComponentBindings } from './lazy-load.component';
import { LazyLoadService } from '../../services/lazy-load/lazy-load.service';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit, OnDestroy, LazyLoadComponentBindings {
  @Input() context = '';
  @Output() intanceEmitter = new EventEmitter<string>();

  private $destroy = new Subject()
  private instance?: LazyLoadComponentBindings
  private changes = new ReplaySubject<SimpleChanges>(10)

  constructor(
    private viewContainerRef: ViewContainerRef,
    private lazyLoadService: LazyLoadService
  ) { }

  ngOnInit(): void {
    this.load()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changes.next(changes)
  }

  private async load(){
    const { LazyLoadComponent } = await import('src/app/modules/shared/components/lazy-load/lazy-load.component')
    const { instance } = this.lazyLoadService.load(this.viewContainerRef, LazyLoadComponent)

    this.instance = instance
    this.subscribeChanges()
    this.subscribeEmitters()
  }

  private subscribeChanges(){
    const instance = this.instance

    if(instance){
      this.changes.pipe(takeUntil(this.$destroy)).subscribe({
        next: changes => {
          instance.ngOnChanges(changes)
          for (const input in changes) {
            const _input = input as Keyof<LazyLoadComponentBindings>
            instance[_input] = changes[input].currentValue
          }
        }
      })
    }
  }

  private subscribeEmitters(){
    this.instance?.intanceEmitter.pipe(takeUntil(this.$destroy)).subscribe({
      next: value => this.intanceEmitter.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.$destroy.next(true)
    this.$destroy.complete()
  }
}
