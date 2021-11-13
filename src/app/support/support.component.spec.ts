import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component=new SupportComponent();

  it('msg test', () => {
    expect(component.message).toEqual('ようこそ！');
  });
  
  it('title test', () => {
    expect(component.title).toEqual('');
  });
  
  it('count test', () => {
    expect(component.count).toEqual(0);
  });
  
  it('mig test', () => {
    expect(component.mig).toEqual('https://www.sony.jp/header-footer/header/images/logo.png');
  });

  
  it('show test', () => {
    expect(component.show).toBeTruthy();
  });
  
  it('array test', () => {
    expect(component.array).toEqual(['a','b','c','d']);
  });
  
  it('getstargdata test', () => {
    expect(component.getstargdata()).toEqual({ listNum: 8, name: 'chen'});
  });
  
  it('onSubmit test', () => {
    expect(component.onSubmit([1])).toThrow();
  });
  
  it('ngOnInit test', () => {
    expect(component.ngOnInit()).toEqual();
  });
  
  it('constructor test', () => {
    const component=new SupportComponent();
    expect(component.constructor()).toBeDefined();
  });

});

