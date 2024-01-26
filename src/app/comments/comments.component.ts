import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {Comments} from "../comments/comments";
import {select, Store} from "@ngrx/store";
import {selectComments} from "../store/selectors/comment.selectors";
import * as CommentActions from "../store/actions/comment.actions";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  comments$: Observable<any>;
  comments: Comments[] = [];
  private unsubscribe$ = new Subject<void>();
  currentPage = 0;
  pageSize = 6;
  pages: number[] = [];
  totalPages:number = 10;

  constructor(private store: Store) {
    this.comments$ = this.store.pipe(select(selectComments));
  }

//   ngOnInit(): void {
//     this.store.dispatch(CommentActions.loadComments({ page: this.currentPage, size: this.pageSize}));
//     this.generatePageNumbers();
//
//     this.comments$
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe({
//         next: (comments) => {
//           if (comments && comments.content) {
//             this.comments = comments.content;
//             console.log(this.comments);
//           }
//         }
//       });
//   }
//
//   loadPage(page: number): void {
//     this.currentPage = page;
//     this.store.dispatch(CommentActions.loadComments({ page: this.currentPage, size: this.pageSize }));
//   }
//
//   generatePageNumbers(): void {
//     this.pages = Array.from({ length: 10 }, (_, i) => i + 1);
//   }
//
//   ngOnDestroy(): void {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//   }
// }

  ngOnInit(): void {
    this.store.dispatch(CommentActions.loadComments({ page: this.currentPage, size: this.pageSize }));
    this.generatePageNumbers();

    this.comments$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((comments) => {
        if (comments && comments.content) {
          this.comments = comments.content;
          console.log(this.comments);
        }
      });
  }

  loadMoreComments(page: number): void {
    this.currentPage = page;
    this.store.dispatch(CommentActions.loadComments({ page: this.currentPage, size: this.pageSize }));
  }

  generatePageNumbers(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
