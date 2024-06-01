import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ArticlesDto, ShortArticleDto } from './constants/constants';

@Injectable({
  providedIn: 'root',
})
export default class ArticlesService {
  constructor(private http: HttpClient) {}

  fetchArticles() {
    return this.http
      .get<ArticlesDto>('https://api.spaceflightnewsapi.net/v4/articles/')
      .pipe(map((res: ArticlesDto) => res.results));
  }

  getArticleById(id: number) {
    return this.http.get<ShortArticleDto>(
      `https://api.spaceflightnewsapi.net/v4/articles/${id}`
    );
  }
}
