import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import ArticlesService from '../articles.service';
import { ShortArticleDto } from '../constants/constants';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [MatIconModule, MatProgressSpinnerModule, RouterModule, NgIf],
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  article: ShortArticleDto | undefined;

  private articlesService: ArticlesService = inject(ArticlesService);

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.articlesService.getArticleById(id).subscribe({
      next: (res: ShortArticleDto) => (this.article = res),
      error: (err) => this.router.navigate(['/articles']),
    });
  }
}
