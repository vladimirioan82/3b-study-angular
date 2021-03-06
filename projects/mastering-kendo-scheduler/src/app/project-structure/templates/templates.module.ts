import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from 'projects/.common/modules/common-modules.module';
import { RootTemplatesComponent } from './components/root-templates/root-templates.component';
import { SlotsAllDayComponent } from './components/slots-all-day/slots-all-day.component';
import { SlotsTimeComponent } from './components/slots-time/slots-time.component';
import { SlotsMonthComponent } from './components/slots-month/slots-month.component';
import { EventsRenderingComponent } from './components/events-rendering/events-rendering.component';
import { EventsAllDayComponent } from './components/events-all-day/events-all-day.component';
import { HeadersMajorTimeComponent } from './components/headers-major-time/headers-major-time.component';
import { HeadersMinorTimeComponent } from './components/headers-minor-time/headers-minor-time.component';
import { HeadersDateComponent } from './components/headers-date/headers-date.component';
import { HeadersGroupComponent } from './components/headers-group/headers-group.component';

@NgModule({
  declarations: [
    RootTemplatesComponent,
    EventsRenderingComponent,
    EventsAllDayComponent,
    SlotsAllDayComponent,
    SlotsTimeComponent,
    SlotsMonthComponent,
    HeadersMajorTimeComponent,
    HeadersMinorTimeComponent,
    HeadersDateComponent,
    HeadersGroupComponent
  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesModule { }
