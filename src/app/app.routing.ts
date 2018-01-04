import { Routes, RouterModule } from '@angular/router';
import { LogimComponent } from './logim/logim.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HostelsListComponent } from './hostels-list/hostels-list.component';
import { UserCustomerListComponent } from './user-customer-list/user-customer-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LogimComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'hostels', component: HostelsListComponent },
    { path: 'users', component: UserCustomerListComponent },
    { path: '**', component: UserCustomerListComponent }


];

export const AppRouting = RouterModule.forRoot(appRoutes, {useHash: true});
