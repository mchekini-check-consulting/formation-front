import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonComponent } from './search-person.component';

describe('SearchPersonComponent', () => {
  let component: SearchPersonComponent;
  let fixture: ComponentFixture<SearchPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPersonComponent]
    });
    fixture = TestBed.createComponent(SearchPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
