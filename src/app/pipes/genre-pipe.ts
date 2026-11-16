import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre',
})
export class GenrePipe implements PipeTransform {
  transform(value: unknown): string{
    if (typeof value!=="string"|| value.trim()===''){
      return 'Unknown Game Type'
    }
    switch (value.toLowerCase()) {
      case 'mmorpg':
        return 'MassivelyMultiplayer RPG'
      case 'shooter':
        return 'Shooter Game';
      case 'moba':
        return 'Multiplayer Online Battle Arena';
      case 'rpg':
        return 'Role Playing Game';
      default:
        return value;
    }
  }
}
