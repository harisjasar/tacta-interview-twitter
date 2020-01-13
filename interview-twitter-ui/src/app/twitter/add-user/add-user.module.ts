import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddUserContainerComponent } from './add-user-container/add-user-container.component';
import { AddUserViewComponent } from './add-user-view/add-user-view.component';
import { AddUserTableComponent } from './add-user-table/add-user-table.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: AddUserContainerComponent, children: [
          {path: '', component: AddUserViewComponent},
        ],
      },
    ]),
    CommonModule,
    FormsModule

  ],
  declarations: [AddUserContainerComponent, AddUserViewComponent, AddUserTableComponent]
})
export class AddUserModule { }