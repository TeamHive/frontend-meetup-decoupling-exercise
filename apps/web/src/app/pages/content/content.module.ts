import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentItemModule } from '../../components/content-item/content-item.module';

import { ContentComponent } from './content.component';

@NgModule({
    imports: [
        ContentItemModule,
        RouterModule.forChild([
            {
                path: '',
                component: ContentComponent
            }
        ])
    ],
    exports: [],
    declarations: [ContentComponent],
    providers: []
})
export class ContentModule { }
