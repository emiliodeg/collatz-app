import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [AppComponent], providers: [provideZonelessChangeDetection()] })
  );

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    component = fixture.componentInstance;
  });

  it('should create', () => expect(component).toBeTruthy());
});
