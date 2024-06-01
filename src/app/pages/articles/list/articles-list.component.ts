import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ArticleItemComponent } from './article-item/article-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NgForOf, NgIf } from '@angular/common';
import { ShortArticleDto } from '../constants/constants';
import ArticlesService from '../articles.service';
import { FormsModule } from '@angular/forms';
import { SearchHighlighterPipe } from '../../../pipes/highlighter.pipe';
import { FilterArticlesPipe } from '../../../pipes/filter-articles.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ArticleItemComponent,
    FilterArticlesPipe,
    SearchHighlighterPipe,
    NgForOf,
    NgIf,
  ],
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  articles = signal<ShortArticleDto[]>([]);
  searchInput = signal<string>('');

  filteredArticles = computed(() => {
    const lowercase = this.searchInput().toLowerCase();
    return this.articles().filter((item) =>
      item.title.toLowerCase().includes(lowercase)
    );
  });

  private articlesService: ArticlesService = inject(ArticlesService);

  constructor() {}

  ngOnInit(): void {
    this.articlesService.fetchArticles().subscribe({
      next: (res: ShortArticleDto[]) => {
        this.articles.set(res);
      },
      error: (err) => console.error(err),
    });
  }
}
