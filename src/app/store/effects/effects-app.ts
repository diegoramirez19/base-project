import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions) { }

  // loadMovies$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[Movies Page] Load Movies'),
  //     mergeMap(() => this.moviesService.getAll()
  //       .pipe(
  //         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //         catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
  //       )
  //     )
  //   )
  // );

}
