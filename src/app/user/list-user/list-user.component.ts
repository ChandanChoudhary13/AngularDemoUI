import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Contacts} from "../../model/contacts.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  contacts: Contacts[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
   
    this.apiService.getUsers()
      .subscribe( data => {
        this.contacts = data.Data;
      });
  }

  deleteUser(user: Contacts): void {
    this.apiService.deleteUser(user.ContactId)
      .subscribe( data => {
        this.contacts = this.contacts.filter(u => u !== user);
      })
  };

  editUser(user: Contacts): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.ContactId.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
