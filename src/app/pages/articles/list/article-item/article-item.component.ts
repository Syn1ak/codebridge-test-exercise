import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShortArticleDto } from '../../constants/constants';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})
export class ArticleItemComponent {
  @Input() article: ShortArticleDto | undefined;
}
