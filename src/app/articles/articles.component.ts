import {Component, OnDestroy, OnInit} from '@angular/core';
import {Articles} from "./articles";
import {ArticleService} from "./articles.service";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as ArticleActions from '../store/actions/article.actions';
import {ArticleState} from "../state/article.state";
import {Observable, Subject, takeUntil} from "rxjs";
import {selectArticles} from "../store/selectors/article.selectors";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit, OnDestroy {
  articles$: Observable<any>;
  articles: Articles[] = [];
  private unsubscribe$ = new Subject<void>();
  currentPage = 0;
  pageSize = 6;
  pages: number[] = [];

  constructor(private store: Store) {
    this.articles$ = this.store.pipe(select(selectArticles));
  }

  ngOnInit(): void {
    this.store.dispatch(ArticleActions.loadArticles({ page: this.currentPage, size: this.pageSize}));
    this.generatePageNumbers();

    this.articles$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (articles) => {
          if (articles && articles.content) {
            this.articles = articles.content;
            console.log(this.articles);
          }
        }
      });
  }

  loadPage(page: number): void {
    this.currentPage = page;
    this.store.dispatch(ArticleActions.loadArticles({ page: this.currentPage, size: this.pageSize }));
  }

  generatePageNumbers(): void {
    this.pages = Array.from({ length: 10 }, (_, i) => i + 1);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

// export class ArticlesComponent implements OnInit{
//   articles$: Observable<any>; // Consider defining a more specific type/interface
//   articles: Articles[] = [];
//   private unsubscribe$ = new Subject<void>();
//   currentPage = 0;
//   pageSize: number = 6;
//   pages: number[] = [];
//
//   constructor(private store: Store) {
//     this.articles$ = this.store.pipe(select(selectArticles));
//   }
//
//   ngOnInit(): void {
//     this.store.dispatch(ArticleActions.loadArticles({ page: 0, size: 9 }));
//
//     this.articles$
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe((articles) => {
//         if (articles && articles.content) {
//           this.articles = articles.content;
//           console.log(this.articles);
//           this.generatePageNumbers(articles.totalPages);
//         }
//       });
//   }
//
//   loadPage(page: number): void {
//     this.currentPage = page;
//     this.store.dispatch(ArticleActions.loadArticles({ page: this.currentPage, size: this.pageSize }));
//   }
//
//   generatePageNumbers(totalPages: number): void {
//     this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
//   }
//
//   ngOnDestroy(): void {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//   }
// }
// export class ArticlesComponent implements OnInit, OnDestroy {
//   articles$: Observable<any>; // Consider defining a more specific type/interface
//   articles: Articles[] = [];
//   private unsubscribe$ = new Subject<void>();
//   currentPage = 0;
//   pageSize: number = 6;
//   pages: number[] = [];
//
//   constructor(private store: Store) {
//     this.articles$ = this.store.pipe(select(selectArticles));
//   }
//
//   ngOnInit(): void {
//     this.store.dispatch(ArticleActions.loadArticles({page: 0, size: 9}));
//
//     this.articles$
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe((articles) => {
//         if (articles && articles.content) {
//           this.articles = articles.content;
//           console.log(this.articles);
//           this.generatePageNumbers();
//         }
//       });
//   }
//
//   loadPage(page: number): void {
//     this.currentPage = page;
//     this.store.dispatch(ArticleActions.loadArticles({page: this.currentPage, size: this.pageSize}));
//   }
//
//   generatePageNumbers(): void {
//     this.pages = Array.from({length: 10}, (_, i) => i + 1);
//   }
//
//   ngOnDestroy(): void {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//   }
// }





















// generatePageNumbers(): void {
//   this.pages = Array.from({ length: 10 }, (_, i) => i + 1);
// }
//
// loadPage(page: number): void {
//   this.currentPage = page;
//   this.store.dispatch(ArticleActions.loadArticles({ page: this.currentPage, size: this.pageSize }));
// }


// ngOnInit(): void {
  //   this.store.dispatch(ArticleActions.loadArticles({ page: this.currentPage, size: this.pageSize }));
  //   this.generatePageNumbers();
  //   this.store.select((state: any) => state.articles as ArticleState)
  //     .subscribe((articleState: ArticleState) => {
  //       console.log('Articles in component:', articleState.articles);
  //       this.articles = articleState.articles;
  //     });
  // }
  // generatePageNumbers(): void {
  //   this.pages = Array.from({ length: 10 }, (_, i) => i + 1);
  // }
  // loadPage(page: number): void {
  //   this.currentPage = page;
  //   this.store.dispatch(ArticleActions.loadArticles({ page: this.currentPage, size: this.pageSize }));
  // }


// export class ArticlesComponent implements OnInit{
//   articles: Articles[] = [];
//   currentPage = 0;
//   pageSize:number = 6;
//   pages: number[] = [];
//
//
//   constructor(
//     private articleService: ArticleService,
//     private route: ActivatedRoute
//   ){}
//   ngOnInit(): void {
//     this.route.url.subscribe(urlSegments => {
//       if (urlSegments[0]?.path === 'articles') {
//         this.fetchPage(this.currentPage);
//       }
//     });
//     this.fetchArticles();
//   }
//   fetchArticles(): void {
//     this.articleService.getArticles(this.currentPage, this.pageSize).subscribe(
//       (data: Articles[]) => {
//         this.articles = data;
//         console.log(data);
//         this.generatePageNumbers();
//       },
//       (error) => {
//         console.error('Error fetching articles:', error);
//       }
//     );
//   }
//
//
//   fetchPage(page: number): void {
//     this.articleService.getArticles(page, 6).subscribe(
//       (articles: Articles[]) => {
//         this.articles = articles;
//         this.currentPage = page;
//         this.generatePageNumbers();
//       },
//       (error: any) => {
//         console.error('Error fetching articles:', error);
//
//       }
//     );
//   }
//   generatePageNumbers(): void {
//     this.pages = Array.from({ length: 10 }, (_, i) => i + 1);
//   }
//
//   loadPage(page: number): void {
//     this.fetchPage(page - 1);
//     this.currentPage = page;
//
//   }
// }
