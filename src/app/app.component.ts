import { Component } from "@angular/core";
import { DragulaService } from "ng2-dragula";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  items = [];
  formId = '';
  lastChangedDate = '';
  lastChangedBy = '';

  getFormattedDate(date) {
    const dd = date.getDate();
    const mm = date.getMonth()+1;
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const mn = date.getMinutes();
    const str = `${dd}/${mm}/${yyyy} ${hh}:${mn}`;

    return str;
  }

  ngOnInit() {
    const url = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';

    fetch(url)
      .then(blob => blob.json())
      .then(data => {

        const date = new Date(data.lastChangedDate);

        this.items = data.form;
        this.formId = data.formId;
        this.lastChangedBy = data.lastChangedBy;
        this.lastChangedDate = `${this.getFormattedDate(date)}`;
      })
  }

  public constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup("draggable", {
      revertOnSpill: true
    });
  }
}