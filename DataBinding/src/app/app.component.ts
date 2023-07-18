import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: {
    name: string;
    type: string;
    content: string;
  }[] = [
    {
      name: 'vladi',
      type: 'server',
      content: 'Server 1 ',
    },
  ];

  count: number = 1;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  numbers: number[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }

  changeFirstName() {
    this.serverElements[0].name = 'changed' + this.count;
    this.count++;
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(e: number) {
    // if (e % 2 == 0) {
    //   this.evenNumbers.push(e);
    // } else {
    //   this.oddNumbers.push(e);
    // }
    this.numbers.push(e);
  }
}
