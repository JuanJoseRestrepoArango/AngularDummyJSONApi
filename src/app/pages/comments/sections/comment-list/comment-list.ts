import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card';
import { RouterModule } from '@angular/router';
import { CommentService } from '../../../../services/comments';
import { Comment } from '../../../../models/comment.models';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule,CardComponent,RouterModule],
  standalone: true,
  templateUrl: './comment-list.html',
})

export class CommentListComponent {
  comments: Comment[] = [];
  loading: boolean = true;

  totalComments:number = 0;
  commentsCards: number = 10;
  currentPage:number = 0;

  constructor(private commentService:CommentService, private cdr: ChangeDetectorRef){
    this.loadComments();
  }

  loadComments(){
    this.loading = true;
    const skip = this.currentPage * this.commentsCards;

    this.commentService.getComments(this.commentsCards, skip).subscribe({
      next:(response) => {
        this.comments = response.comments;
        this.totalComments = response.total;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error:(err)=>{
        console.error('Error fetching comments:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  nextPage(){
    if((this.currentPage + 1) * this.commentsCards < this.totalComments){
      this.currentPage++;
      this.loadComments();
    }
  }

  previusPage(){
    if(this.currentPage > 0){
      this.currentPage--;
      this.loadComments();
    }
  }

  get totalPages():number{
    return Math.ceil(this.totalComments/this.commentsCards)
  }
}
