import { Component, OnInit } from '@angular/core';
import '../../../../public/css/style.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  appName: string = 'ng2 Boiler Plate';
  isDevMode: boolean;

  ngOnInit() {
    // console.log(process.env.NODE_ENV);
    if (process.env.ENV === 'dev') {
        this.isDevMode = true;
    } else {
      this.isDevMode = false;
    }
  }
}

