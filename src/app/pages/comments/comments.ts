import { Component } from '@angular/core';
import { CommentListComponent } from './sections/comment-list/comment-list';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentListComponent],
  templateUrl: './comments.html',
})
export class CommentsComponent {

}
