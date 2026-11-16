import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDescriptionPipe',
})
export class GameDescriptionPipe implements PipeTransform {
  transform(value: unknown, limit: number = 60): string {
    if (typeof value !== 'string' || value.trim() === '') {
      return '';
    }
    if (typeof limit !== 'number' || !Number.isFinite(limit)) {
      limit = 60;
    }
    limit = Math.max(0, Math.floor(limit));
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }
}
