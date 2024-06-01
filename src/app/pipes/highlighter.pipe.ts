import { Pipe, PipeTransform } from '@angular/core';
import { ShortArticleDto } from '../pages/articles/constants/constants';

@Pipe({
  name: 'highlighter',
  standalone: true,
})
export class SearchHighlighterPipe implements PipeTransform {
  transform(
    value: ShortArticleDto[],
    filterStr: string,
    ...args: unknown[]
  ): ShortArticleDto[] {
    if (!filterStr) return value;
    const regExp = new RegExp(filterStr, 'igm');
    return value.map((item) => {
      const updatedArticle = { ...item };
      updatedArticle.title = updatedArticle.title.replace(
        regExp,
        '<span class="highlighted-text">$&</span>'
      );
      updatedArticle.summary = updatedArticle.summary.replace(
        regExp,
        '<span class="highlighted-text">$&</span>'
      );
      return updatedArticle;
    });
  }
}
