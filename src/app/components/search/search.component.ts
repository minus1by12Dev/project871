import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sn-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() searchedName? = null;

  constructor() { }

  ngOnInit() {

    
  }

}
