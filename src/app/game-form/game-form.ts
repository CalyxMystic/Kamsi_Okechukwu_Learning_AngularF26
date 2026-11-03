import {Component, computed, effect, inject, input} from '@angular/core';
import {FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import {GameService} from '../services/game';
import {Router} from '@angular/router';
import {noWhitespaceValidator, timelineValidator} from '../customValidators';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-game-form',
  styleUrl: './game-form.css',
  templateUrl: './game-form.html',
})
export class GameForm {
  private fb=inject(FormBuilder)
  private service =inject(GameService)
  private router = inject(Router);
  id = input<string>();

  isEditMode = computed(() => !!this.id());

  gameForm=this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    genre: ['', Validators.required, noWhitespaceValidator()],
    copiesSold: [''],
    isOwned: [''],
    releaseYear: ['', Validators.required],
    remakeYear: ['']
  },{validators: timelineValidator()})

  constructor() {
    effect(() => {
      let currentId = this.id();
      if (currentId) {
        let existingGame = this.service.gameList().find(g => g.id === Number(currentId));
        if (existingGame) {
          this.gameForm.patchValue(existingGame as any);
        }
      }
    });
  }

  onSubmit(): void {
    if (this.gameForm.invalid) return;
    const value = this.gameForm.getRawValue();
    if (this.isEditMode()) {
      this.service.updateGame({ id: Number(this.id()), ...value as any});
      this.router.navigate(['/games', this.id()]);
    } else {
      this.service.addGame({ id: Date.now(), ...value as any});
      this.gameForm.reset({ releaseYear: 'false' });
    }
  }
}
