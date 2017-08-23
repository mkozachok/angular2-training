import { Component, OnInit, Optional } from '@angular/core';
import { RandomService } from '../common/random.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})
export class OptionalComponent implements OnInit {

  constructor(@Optional() public randomService: RandomService) { }

  ngOnInit() {
  }

}
