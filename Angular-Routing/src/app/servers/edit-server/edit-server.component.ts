import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = true;
  changesSaved = false;
  paramsSubscription!:Subscription

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    console.log(this.server)
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

   
    this.route.queryParams.subscribe((params:Params) => {
     
      const id = +this.route.snapshot.params['id']
      this.server = this.serversService.getServer(id)
    })
    this.route.fragment.subscribe();
  }

  

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): any {
    if(!this.allowEdit){
      return true
    } else if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you really want to leave the page with unsaved changes ?')
    } else {
      return true
    }
  }
}
