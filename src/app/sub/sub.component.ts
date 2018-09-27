import { Component } from '@angular/core';

import { RandomService } from '../random.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  providers: [RandomService]
})
export class SubComponent {

  constructor(private randomService: RandomService) { }

  getRandomNumber(): number {
    return this.randomService.getRandomNumber();
  }

}
