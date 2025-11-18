import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from '../detail/detail.component';
import { CollatzComponent } from './collatz.component';

describe('CollatzComponent', () => {
  let component: CollatzComponent;
  let fixture: ComponentFixture<CollatzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CollatzComponent, ReactiveFormsModule, DetailComponent],
      providers: [provideZonelessChangeDetection()]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
