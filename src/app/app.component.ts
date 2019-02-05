import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import config from '../../src/config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: <string>config.firebase.apiKey,
      authDomain: <string>config.firebase.authDomain,
    });
  }
}
