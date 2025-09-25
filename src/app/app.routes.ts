import { Routes } from '@angular/router';
import { CampaignsListComponent } from './features/campaigns/pages/campaigns-list/campaigns-list.component';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { CampaignDetailsComponent } from './features/campaigns/pages/campaign-details/campaign-details.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/campaigns",
        pathMatch: "full"
    },
    {
        path: "campaigns",
        component: AuthLayoutComponent,
        children: [
            {
                path: "",
                component: CampaignsListComponent,
            },
            {
                path: "details/:id",
                component: CampaignDetailsComponent,
            }
        ]
    }
];
