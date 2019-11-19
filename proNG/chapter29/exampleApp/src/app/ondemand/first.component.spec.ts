import { TestBed, ComponentFixture, async } from "@angular/core/testing"
import { FirstComponent } from './first.component'
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FirstComponent', () => {
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;
  let debugElement: DebugElement;
  let bindingELement: HTMLSpanElement;
  let divELement: HTMLDivElement;
  let mockRep = {
    getProducts: function () {
      return [
        new Product(1, 'test1', "Soccer", 100),
        new Product(2, 'test2', "Chess", 100),
        new Product(3, 'test3', "Soccer", 100)
      ]
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [{ provide: Model, useValue: mockRep }]
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(FirstComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      bindingELement = debugElement.query(By.css('span')).nativeElement;
      divELement = debugElement.children[0].nativeElement;
    });
    
  }));
  it('is defined', () => {
    expect(component).toBeDefined();
  });
  it('filters categories', () => {
    component.category = 'Chess';
    // 要求Angular测试环境处理所有的变更，并对模板中的数据绑定表达式求值
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(1);
    expect(bindingELement.textContent).toBe('1');
    component.category = 'Soccer';
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(2);
    expect(bindingELement.textContent).toBe('2');
    component.category = 'Running';
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(0);
    expect(bindingELement.textContent).toBe('0');
  });
  it('handles mouse events', () => {
    expect(component.highlighted).toBeFalsy();
    expect(divELement.classList.contains('bg-success')).toBeFalsy();
    debugElement.triggerEventHandler('mouseenter', new Event('mouseenter'));
    fixture.detectChanges();
    expect(component.highlighted).toBeTruthy();
    expect(divELement.classList.contains('bg-success')).toBeTruthy();
    debugElement.triggerEventHandler('mouseleave', new Event('mouseleave'));
    fixture.detectChanges();
    expect(component.highlighted).toBeFalsy();
    expect(divELement.classList.contains('bg-success')).toBeFalsy();
  });
});