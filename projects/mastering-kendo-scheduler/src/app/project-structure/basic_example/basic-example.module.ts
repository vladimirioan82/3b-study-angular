import { CommonModulesModule } from './../../../../../.common/common-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootBasicExampleComponent } from './components/root-basic-example/root-basic-example.component';

@NgModule({
  declarations: [RootBasicExampleComponent],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class BasicExampleModule { }
