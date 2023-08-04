import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerResolverService implements Resolve<{id:number, name:string, status:string}> {

    constructor(private serversService:ServersService){}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):any{

      const id = +route.params['id']

      return this.serversService.getServer(id)

    }
 
}