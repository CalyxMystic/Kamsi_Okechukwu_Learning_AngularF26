import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameAPIService } from './game-apiservice';

describe('GameAPIService', () => {
  let component: GameAPIService;
  let fixture: ComponentFixture<GameAPIService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameAPIService],
    }).compileComponents();

    fixture = TestBed.createComponent(GameAPIService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
