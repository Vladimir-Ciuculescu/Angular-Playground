import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  activeUsers!: any[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  // @Input() users!: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
}
