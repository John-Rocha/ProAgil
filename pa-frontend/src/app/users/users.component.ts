import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  eventos: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    // tslint:disable-next-line: deprecation
    this.eventos = this.http.get('http://localhost:5000/api/values').subscribe(
      (resp) => {
        this.eventos = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
