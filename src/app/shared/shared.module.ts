import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LoaderComponent } from './loader/loader.component';
import { LazyLoadDirective } from './image-lazy-load/lazy-load.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    LazyLoadDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoaderComponent,
    LazyLoadDirective
  ]
})
export class SharedModule { }
