import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Articles} from "../articles/articles";
import {Subject, take} from "rxjs";
import {ArticleService} from "../articles/articles.service";
import {Comments} from "../comments/comments";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../comments/comments.service";
import {Store} from "@ngrx/store";
import {Users} from "../users/users";
import {Medias} from "./article";
import * as CommentActions from '../store/actions/comment.actions';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})


  export class ArticleDetailsComponent implements OnInit {

  articleId: string = '';
  userId: string = '';
  userName: string = '';
  password: string = '';
  article: Articles | undefined;
  articleSubject: Subject<Articles> = new Subject<Articles>();
  comments: Comments[] = [];
  users: (Users | undefined)[] = [];
  medias: Medias[] = [];
  replies: Comments[] = [];
  commentForm: FormGroup | undefined;
  constructor(private route: ActivatedRoute,
              private articleService : ArticleService,
              private commentService: CommentService,
              private fb: FormBuilder,
              private store: Store
  ) {}
  handleImageError(event: any) {
    console.error('Error loading image:', event);
  }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      text: ['', Validators.required],
    });

    this.route.paramMap.subscribe(params => {
      const articleId = params.get('articleId');
      if (articleId) {
        this.articleService.getOneArticle(articleId).subscribe(
          article => {
            this.article = article;
            this.articleSubject.next(article);
            // this.comments = article.comments;
            this.comments = article.comments || [];
            this.users = this.comments.map((comment) => comment.user);

            // this.medias = this.article.medias;
            this.medias = article.medias || [];
            console.log(this.replies);
            console.log(this.article);

            },
          error => {
            console.error('Error fetching article:', error);

          }
        );
      }
    });



  }

  // postComment() {
  //   if (this.commentForm) {
  //     const loggedInUserId = localStorage.getItem('userId');
  //
  //     if (loggedInUserId) {
  //       const newComment: Comments = {
  //         id: '',
  //         text: this.commentForm.value.text,
  //         userId: loggedInUserId,
  //         articleId: this.articleId,
  //         postingTime: new Date(),
  //       };
  //
  //       this.store.dispatch(CommentActions.addComment({ comment: newComment }));
  //       this.commentForm.reset();
  //     } else {
  //
  //     }
  //   } else {
  //
  //   }
  // }

  }





