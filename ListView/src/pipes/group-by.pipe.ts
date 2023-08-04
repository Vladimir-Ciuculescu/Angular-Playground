import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
  transform(value: any[], property: string): any {
    console.log(value);
    console.log(property);
    // if (!Array.isArray(value) || value.length === 0 || !property) {
    //   return value;
    // }

    const groupedData: any = {};
    value.forEach((item) => {
      const key = item[property];
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(item);
    });

    console.log(groupedData);

    console.log(
      Object.keys(groupedData).map((key) => ({
        category: key,
        cars: groupedData[key],
      }))
    );

    return Object.keys(groupedData).map((key) => ({
      category: key,
      cars: groupedData[key],
    }));
  }
}
