import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSuffix'
})
export class NameSuffixPipe implements PipeTransform {

  transform(value: string, args: boolean): string {
    const guy: string = "(guy)";
    const girl: string = "(girl)";
    return `${value} ${args ? guy : girl}`;
  }

}
