import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrl: 'portfolio.component.scss'
})

export class PortfolioComponent  {
    board = [
        ['X','O','X'],
        ['X','O',''],
        ['O','O','X'],
    ]
}