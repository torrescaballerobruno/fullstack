import { Component, OnInit,Input} from '@angular/core';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input("titlehijo") titlehijo;
  nombre='oscar';
  constructor() { }
  ngOnInit() {
  }
}
