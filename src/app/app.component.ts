import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userlist';
  data : any = [];
  displayedColumns = ['Name', 'Age', 'Address']
  constructor( private http: HttpClient ) {

  }

  getData() {
    const url = 'http://localhost:3001/users';
    this.http.get( url ).subscribe((res) => {
      this.data = res;
      console.log( this.data );
    })
  }
}
