import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SwUpdate } from '@angular/service-worker';

import { Log, Level } from 'ng2-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public value: Observable<string>;

  constructor(
    private swUpdate: SwUpdate,
  ) {

  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }

      });

    }
  }

}
