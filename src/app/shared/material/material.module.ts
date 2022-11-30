import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialModule { }
