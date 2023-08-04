import { Component } from '@angular/core';

interface Car {
  make: string;
  model: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ];
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }
  cars: Car[] = [
    { make: 'Audi', model: 'A4' },
    { make: 'Audi', model: 'Q5' },
    { make: 'BMW', model: '3 Series' },
    { make: 'BMW', model: 'X3' },
    { make: 'Audi', model: 'A6' },
    { make: 'BMW', model: '5 Series' },
    // Add more cars here with different makes and models
  ];

  name: string = 'max';
}
