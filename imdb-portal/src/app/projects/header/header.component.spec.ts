import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from '../../app.component';
import {$} from 'protractor';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title as OMDB Search'`, () => {
    fixture.detectChanges();
    const e1 = fixture.nativeElement.querySelector('p');
    expect(e1.innerText).toContain('OMDB Search');
  });

  it(`should have the label as Search a movie'`, () => {
    fixture.detectChanges();
    const e1 = fixture.nativeElement.querySelector('label');
    expect(e1.innerText).toContain('Search a movie');
  });
});
