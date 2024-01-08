import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-card',
  template: `
    <main
      class="flex flex-col items-center px-5 py-3 border-solid border-sky-600 border-[1px]  rounded-md"
    >
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
      <h3 class="text-xl font-light">{{ subtitle }}</h3>
      @if (description) {
      <summary class="font-light mt-1 text-sm">({{ description }})</summary>
      <br>
      }
      <p class="font-thin text-justify">{{ body }}</p>
    </main>
  `,
})
export class CardComponent {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public description: string = '';
  @Input() public body: string = '';

  constructor() {}

  ngOnInit() {}
}
