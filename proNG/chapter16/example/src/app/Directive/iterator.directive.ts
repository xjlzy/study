import { Directive, ViewContainerRef, TemplateRef, Input, OnInit, DoCheck, DefaultIterableDiffer, IterableDiffers, ChangeDetectorRef, TrackByFunction, ViewRef } from "@angular/core";

@Directive({
  selector: '[paForOf]'
})

export class PaIteratorDirective implements OnInit, DoCheck {
  private differ: DefaultIterableDiffer<any>;
  private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private differs: IterableDiffers) { }

  @Input('paForOf')
  dataSource: any;

  ngOnInit(): void {
    this.differ = <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create((i, item): any => {
      return item.id;
    });
    //this.updateContent();
  }

  ngDoCheck(): void {
    
    let changes = this.differ.diff(this.dataSource);
    if (changes !== null) {
      changes.forEachAddedItem(addition => {
        let context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
        context.view = this.container.createEmbeddedView(this.template, context);
        this.views.set(addition.trackById, context);
      });
      let removals = false;

      changes.forEachRemovedItem(removal => {
        removals = true;
        let context = this.views.get(removal.trackById);
        if(context != null) {
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removal.trackById);
        }
      });
      if(removals) {
        let index = 0;
        this.views.forEach(context => context.setData(index++, this.views.size));
      }
    }
    //this.updateContent();
  }

  private updateContent() {
    this.container.clear();
    this.dataSource.forEach((element, idx) => {
      this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[idx], idx, this.dataSource.length));
    });
  }
}

class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  view: ViewRef;
  index: number;
  constructor(public $implicit: any, public position: number, public total: number) {
    this.setData(position, total);
  }

  public setData(index: number, total: number) {
    this.index = index;
    this.odd = index % 2 === 1;
    this.even = index % 2 === 0;
    this.first = index === 0;
    this.last = index === total - 1;
  }
}