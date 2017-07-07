import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app test';
  title_test = 'test title';
  obj = {
      id: "1",
      name: "Holden Grant"
  }

  arr = ["qwe", "rty", "uio", "asd", "fgh"];

  isTrue = true;
  myName = "Holden";
}
