import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  constructor(
    private router: Router,
  ) { }

  public navigate( path: string ) {
    console.log("navigating to: ", path);
    this.router.navigate(['/' + path]);
  }
}
