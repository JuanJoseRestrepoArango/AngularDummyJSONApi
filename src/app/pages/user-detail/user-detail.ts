import { Component } from '@angular/core';
import { User } from '../../models/user.models';
import { UserService } from '../../services/users';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-detail.html'
})
export class UserDetailComponent {
  user?: User;
  loading: boolean = true;

  constructor(private userService: UserService,private cdr: ChangeDetectorRef,private route: ActivatedRoute) {
    this.loadUser();
  }

  loadUser() {
    this.loading = true;
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId){
      this.userService.getUserById(userId).subscribe({
        next:(response) => {
          this.user = response;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error fetching user:', err);
          this.loading = false;
          this.cdr.detectChanges(); 
        }

      })
    }
  }

  handleImageError() {
    if(this.user){
      this.user.image = 'images/defaultUserImage.png';
    }
  }

  goBack(){
    window.history.back();
  }
}
