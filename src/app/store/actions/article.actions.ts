import { createAction, props } from '@ngrx/store';
import { Articles } from '../../articles/articles';

export const loadArticles = createAction('[Articles] Load Articles', props<{ page: number, size: number }>());
export const loadArticlesSuccess = createAction('[Articles] Load Articles Success', props<{ articles: Articles[] }>());
export const loadArticlesFailure = createAction('[Articles] Load Articles Failure', props<{ error: any }>());
export const selectArticle = createAction('[Articles] Select Article', props<{ article: Articles }>());
