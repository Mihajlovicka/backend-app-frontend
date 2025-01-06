import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateAccommodationComponent } from "./create-accommodation/create-accommodation.component";
import { AccommodationsListComponent } from "./accommodations-list/accommodations-list.component";

const routes: Routes = [
  {
    path: "",
    component: AccommodationsListComponent
  },
  {
    path: 'create',
    component: CreateAccommodationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccmodationRoutingModule {}
