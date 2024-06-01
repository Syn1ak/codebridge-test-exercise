import { Pipe, PipeTransform } from '@angular/core';
import {
  PriorityFilterDto,
  ShortArticleDto,
} from '../pages/articles/constants/constants';

@Pipe({
  name: 'filterArticles',
  standalone: true,
})
export class FilterArticlesPipe implements PipeTransform {
  transform(
    value: ShortArticleDto[],
    filter: string,
    ...args: unknown[]
  ): ShortArticleDto[] {
    if (!filter) return value;

    return value
      .map((item) => this.getFilterDto(item, filter))
      .filter((item) => item.priority != 0)
      .sort((a, b) => b.priority - a.priority)
      .map((item) => item.dto);
  }

  getFilterDto(
    value: ShortArticleDto,
    filter: string
  ): PriorityFilterDto<ShortArticleDto> {
    const filterLowercase = filter.toLowerCase();
    const titleLower = value.title.toLowerCase();
    const summaryLower = value.summary.toLowerCase();

    if (titleLower.includes(filterLowercase)) {
      const priorty: PriorityFilterDto<ShortArticleDto> = {
        dto: value,
        priority: 2,
      };
      return priorty;
    }
    if (summaryLower.includes(filterLowercase)) {
      const priorty: PriorityFilterDto<ShortArticleDto> = {
        dto: value,
        priority: 1,
      };
      return priorty;
    }
    return {
      dto: value,
      priority: 0,
    };
  }
}
