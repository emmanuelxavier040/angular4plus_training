import { Route } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SpecComponent } from './spec/spec.component';


export const PRODUCT_ROUTES: Route[] = [
    { path: "overview", component: OverviewComponent },
    { path: "spec", component: SpecComponent }
]