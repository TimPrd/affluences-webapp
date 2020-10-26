import { Component, OnInit } from '@angular/core';
import { AffluencesService } from '../services/affluences.service';
import { EMESSAGES } from '../EMessages.enum'
@Component({
  selector: 'app-interface-affluence',
  templateUrl: './interface-affluence.component.html',
  styleUrls: ['./interface-affluence.component.scss']
})
export class InterfaceAffluenceComponent implements OnInit {

  constructor(private affluencesService: AffluencesService) { }

  date;
  time;
  isLoading = false;
  affluences;

  ngOnInit(): void {
  }

  onTimeSet(time) {
    this.time = time;
  }

  onDateSet(date) {
    this.date = date;
  }

  getAffluences() {
    if (this.date && this.time) {
      this.isLoading = true;
      const fullDate = this.date + 'T' + this.time;
      this.affluencesService.getTime(fullDate).subscribe(
        (data) =>  (data.available) ? this.affluences = { status: "success", data: EMESSAGES.OK } : this.affluences = { status: "warning", data: EMESSAGES.KO },
        (err) => this.affluences = { status: "danger", data: EMESSAGES.ERR },
        () => setTimeout(()=>{ this.isLoading = false }, 2000)
      );
    }
  }
}
