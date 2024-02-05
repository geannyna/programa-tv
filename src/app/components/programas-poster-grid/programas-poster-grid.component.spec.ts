import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasPosterGridComponent } from './programas-poster-grid.component';

describe('ProgramasPosterGridComponent', () => {
  let component: ProgramasPosterGridComponent;
  let fixture: ComponentFixture<ProgramasPosterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasPosterGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramasPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
