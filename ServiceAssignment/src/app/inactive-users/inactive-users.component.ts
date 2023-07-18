import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers!: any[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }

  // @Input() users!: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  // onSetToActive(id: number) {
  //   this.userSetToActive.emit(id);
  // }
}
