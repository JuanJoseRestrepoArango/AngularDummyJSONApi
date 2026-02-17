import { Component,ChangeDetectorRef } from '@angular/core';
import { User } from '../../../../models/user.models';
import { UserService } from '../../../../services/users';
import { CardComponent } from '../../../../shared/card/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule,CardComponent,RouterModule],
  standalone: true,
  templateUrl: './users.html',
})

export class UsersListComponent {
  users : User[] = [];
  loading: boolean = true;

  totalUsers: number = 0;
  usersCards: number = 10;
  currentPage: number = 0;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {
    this.loadUsers();
  
  }

  loadUsers(){
    this.loading = true;
    const skip = this.currentPage * this.usersCards;

    this.userService.getUsers(this.usersCards, skip).subscribe({
      next:(response) => {
        this.users = response.users;
        this.totalUsers = response.total;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  nextPage(){
    if((this.currentPage + 1) * this.usersCards < this.totalUsers){
      this.currentPage++;
      this.loadUsers();
    }
  }

  previusPage(){
    if(this.currentPage > 0){
      this.currentPage--;
      this.loadUsers();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalUsers / this.usersCards);
  }

}
