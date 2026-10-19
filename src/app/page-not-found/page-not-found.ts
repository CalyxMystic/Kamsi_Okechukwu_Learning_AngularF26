import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  imports: [],
  selector: 'app-page-not-found',
  styleUrl: './page-not-found.css',
  templateUrl: './page-not-found.html',
})
export class PageNotFound {
  private router=inject(Router)

  goHome(): void{
    this.router.navigate(['/games'])
  }
}
