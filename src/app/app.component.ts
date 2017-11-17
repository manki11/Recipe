import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

const secret = require('../assets/secret.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: secret.apiKey,
      authDomain: secret.authDomain,
    });
  }
}
