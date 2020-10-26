import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-affluences-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './affluences-time-picker.component.html',
  styleUrls: ['./affluences-time-picker.component.scss']
})
export class AffluencesTimepickerComponent implements OnInit {

  constructor() { }
  @Output() timepickerEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onTimeChange(selectedTime: { time: Date }) {
    if (selectedTime && selectedTime.time) {
      const time = moment(selectedTime.time).format('HH:mm:ss');
      this.timepickerEvent.emit(time);
    }
  }
}
