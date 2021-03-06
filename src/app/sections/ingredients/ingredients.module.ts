import { NgModule } from '@angular/core';

import { IngredientsRoutingModule } from './ingredients.routing';
import { SharedModule } from '../../shared/shared.module';
import {
  SearchInputComponent,
  IngredientSearchComponent,
  FactsheetComponent
} from './index';

@NgModule({
  imports: [
    SharedModule,
    IngredientsRoutingModule
  ],
  declarations: [
    FactsheetComponent,
    IngredientSearchComponent,
    SearchInputComponent
  ],
  providers: [],
  entryComponents: [
    FactsheetComponent
  ]
})
export class IngredientsModule { }
