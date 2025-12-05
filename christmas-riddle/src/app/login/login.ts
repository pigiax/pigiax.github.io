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
    const pwdSolved = localStorage.getItem('pwdSolved');
    if (pwdSolved == "1") {
      this.router.navigate(['/riddle']);
    }
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