export type ArticlesDto = {
  count: number;
  next: string;
  previous: string;
  results: any[];
};

export type ShortArticleDto = {
  events: any[];
  featured: boolean;
  id: number;
  image_url: string;
  launches: any[];
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
  url: string;
};

export interface PriorityFilterDto<T> {
  dto: T;
  priority: number;
}
