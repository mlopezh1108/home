import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss', './game-bg.component.scss'],
})
export class GameComponent {
  player: 'close' | 'circle' = 'close';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  winner = false;

  selectCell(col: number, row: number) {
    if (this.board[col][row].length || this.winner) return;
    this.board[col][row] = this.player;
    this.#checkWinner(col, row);
    if(this.#checkDraw()) this.#draw();
    this.player = this.player === 'close' ? 'circle' : 'close';
  }

  #checkDraw() {
    return this.board
      .map((col) => col.every((row) => row.length))
      .every((col) => !!col);
  }

  #draw() {
    this.cleanBoard();
    alert('Juempo en empate');
  }

  #checkWinner(col: number, row: number) {
    if (this.#checkHorizontal(col)) this.#winner();
    if (this.#checkVertical(row)) this.#winner();
    if (this.#checkDiagonal()) this.#winner();
  }

  #winner() {
    this.winner = true;
    alert(`Jugador ${this.player === 'close' ? 1 : 2} Gana`);
    confirm('Reiniciar Juego') ? this.cleanBoard() : null;
  }

  cleanBoard() {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) this.board[i][j] = '';
    this.winner = false;
  }

  #checkHorizontal(col: number) {
    return this.board[col].every((item) => item === this.player);
  }

  #checkVertical(row: number) {
    return this.board
      .map((col) => col[row])
      .every((item) => item === this.player);
  }

  #checkDiagonal() {
    const aux = [...this.board];
    return (
      this.board
        .map((col, index) => col[index])
        .every((item) => item === this.player) ||
      aux
        .reverse()
        .map((col, index) => col[index])
        .every((item) => item === this.player)
    );
  }
}
