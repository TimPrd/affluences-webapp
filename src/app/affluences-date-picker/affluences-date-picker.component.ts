import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-affluences-date-picker',
  templateUrl: './affluences-date-picker.component.html',
  styleUrls: ['./affluences-date-picker.component.scss']
})
export class AffluencesDatepickerComponent implements OnInit {
  constructor() { }

  @Output() datepickerEvent = new EventEmitter<string>();


  ngOnInit(): void {
  }

  onDateChange(date: Date) {
    if (date) {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      this.datepickerEvent.emit(formattedDate);
    }
  }
}
