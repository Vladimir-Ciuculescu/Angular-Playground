import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateService } from './servers/edit-server/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },

  {
    path: 'servers',
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent , resolve:{server:ServerResolverService}},
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateService],
      },
    ],
  },
  // {path:'not-found', component:NotFoundComponent},
  {path:'not-found', component:ErrorPageComponent, data:{message:'Page not found'}},
  {path:'**', redirectTo:'/not-found'}
  // { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
