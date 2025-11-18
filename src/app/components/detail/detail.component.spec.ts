import { DecimalPipe } from '@angular/common';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YesNoPipe } from '../../pipes/yes-no.pipe';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailComponent, YesNoPipe, DecimalPipe],
      providers: [provideZonelessChangeDetection()]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    fixture.componentRef.setInput('value', 1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
