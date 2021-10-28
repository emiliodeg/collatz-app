import { detail } from 'collatz-generator/lib';
import { CollatzComponent } from './collatz.component';

describe('CollatzComponent', () => {
  let component: CollatzComponent;

  beforeEach(() => {
    component = new CollatzComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setOption', () => {
    it('should set an option', () => {
      const option = 'detail';

      component.setOption(option);

      expect(component.option).toBe(option);
    });
  });

  describe('next', () => {
    it('should get next value', () => {
      component.form.setValue({ value: 5 });

      expect(component.next).toBe(16);
    });
  });
});
