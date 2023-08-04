import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(servers: any[], serverName: string) {
    console.log(!serverName);
    if (!serverName) {
      return servers;
    }

    return servers.filter((server: any) => server.name.includes(serverName));
  }
}
