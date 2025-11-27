import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RiddleConfig } from '../data/config';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  public readonly password: WritableSignal<string> = signal('');
  public readonly errorMessage: WritableSignal<string> = signal('');

  constructor(private router: Router) { }

  ngOnInit(): void {
    const lastRiddle = localStorage.getItem('riddleId');
    if(lastRiddle && Number(lastRiddle) > 0) {
      this.router.navigate(['/riddle']);
    }
  }

  login() {
    const pwd = this.password();
    if (pwd === RiddleConfig.password) {
      this.router.navigate(['/riddle']);
    } else {
      this.errorMessage.set('Password errata, riprova!');
    }
  }
}