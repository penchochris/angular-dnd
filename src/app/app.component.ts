import { Component } from "@angular/core";
import { DragulaService } from "ng2-dragula";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  items = [];

  ngOnInit() {
    const url = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';

    fetch(url)
      .then(blob => blob.json())
      .then(data => this.items = data.form)
  }

  public constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup("draggable", {
      revertOnSpill: true
    });
  }
}