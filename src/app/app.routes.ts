import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { TstudentComponent } from './tstudent/tstudent.component';

export const routes: Routes = [
    { path: 'media', component: MediaComponent },
    { path: 'stddev', component: StddevComponent },
    { path: 'linear-regression', component: LinearRegressionComponent },
    { path: 'simpson', component: SimpsonComponent },
    { path: 'correlation', component: CorrelationComponent },
    { path: 'tstudent', component: TstudentComponent },
];
