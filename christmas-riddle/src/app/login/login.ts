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
  public readonly isChristmas: WritableSignal<boolean> = signal(false);
  public readonly password: WritableSignal<string> = signal('');
  public readonly errorMessage: WritableSignal<string> = signal('');

  constructor(private router: Router) { }

  ngOnInit(): void {
    const today = new Date();
    this.isChristmas.set(today.getMonth() == 11 && today.getDate() >= 25);
    const pwdSolved = localStorage.getItem('pwdSolved');
    if (pwdSolved == "1") {
      this.router.navigate(['/riddle']);
    }
  }

  refresh() {
    const today = new Date();
    this.isChristmas.set(today.getMonth() == 11 && today.getDate() >= 25);
  }

  login() {
    const pwd = this.password();
    if (pwd.toLowerCase() === RiddleConfig.password.toLowerCase()) {
      localStorage.setItem('pwdSolved', '1');
      this.router.navigate(['/riddle']);
    } else {
      this.errorMessage.set('Password errata, riprova!');
    }
  }
}