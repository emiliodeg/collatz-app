import { YesNoPipe } from './yes-no.pipe';

describe('YesNoPipe', () => {
  let pipe: YesNoPipe;
  beforeEach(() => {
    pipe = new YesNoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  const falsy = [false, 0, '', null];

  falsy.forEach((test) => {
    it(`should get "no" with falsy values`, () => {
      const result: string = pipe.transform(test);

      expect(result).toEqual('no');
    });
  });

  const truthy = [true, 1, {}, 'true'];

  truthy.forEach((test) => {
    it(`should get "yes" with truthy values`, () => {
      const result: string = pipe.transform(test);

      expect(result).toEqual('yes');
    });
  });
});
