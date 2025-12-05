import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RiddleConfig } from '../data/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-riddle',
  imports: [FormsModule],
  templateUrl: './riddle.html',
  styleUrl: './riddle.scss',
})
export class Riddle implements OnInit {

  public readonly lastRiddle: WritableSignal<number> = signal(0);
  public readonly answer: WritableSignal<string> = signal('');
  public readonly passcode: WritableSignal<string> = signal('');

  constructor(private router: Router) { }

  public currentRiddle(): string {
    const riddle = RiddleConfig.riddles[this.lastRiddle()];
    return riddle ? riddle.quesion : '';
  }

  ngOnInit(): void {
    const pwdSolved = localStorage.getItem('pwdSolved');
    if(pwdSolved != "1") {
       this.router.navigate(['/']);
      return;
    }
    const lastRiddle = localStorage.getItem('riddleId');
    this.lastRiddle.set(Number(lastRiddle));
    this.fillPasscode();
  }

  nextRiddle(): void {
    const answer = this.answer();
    const riddle = RiddleConfig.riddles[this.lastRiddle()];
    if (answer.toLowerCase() == riddle.answer.toLowerCase()) {
      const lastRiddle = this.lastRiddle() + 1;
      this.lastRiddle.set(lastRiddle);
      localStorage.setItem('riddleId', lastRiddle.toString());
      this.answer.set('');
      this.fillPasscode();
    } else {
      alert('Risposta errata, riprova!');
    }
  }

  help(): void {
    const riddle = RiddleConfig.riddles[this.lastRiddle()];
    alert(`${riddle.help}`);
  }

  restartRiddle(): void {
    this.lastRiddle.set(0);
    localStorage.setItem('riddleId', '0');
    this.answer.set('');
    this.fillPasscode();
  }

  private fillPasscode(): void {
    let passcode = '';
    for (let i = 0; i <= this.lastRiddle(); i++) {
      const riddle = RiddleConfig.riddles[i - 1];
      if (!!riddle)
        passcode += riddle.code;
    }
    this.passcode.set(passcode);
  }

  public isCompleted(): boolean {
    return this.lastRiddle() >= Object.keys(RiddleConfig.riddles).length;
  }
}
