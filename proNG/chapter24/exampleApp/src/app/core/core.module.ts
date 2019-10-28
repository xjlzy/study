import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table.component';
import { FormComponent } from './form.component';
import { ModelModule } from '../model/model.module';
import { SharedState, SHARE_STATE, MODES } from './sharedState.model';
import { Subject } from 'rxjs';
import { StatePipe } from './state.pipe';
import { MessageModule } from '../messages/message.module';
import { MessageService } from '../messages/message.service';
import { Model } from '../model/repository.model';
import { Message } from '../messages/message.model';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule, MessageModule],
  declarations: [TableComponent, FormComponent, StatePipe],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [{
    provide: SHARE_STATE, 
    deps: [MessageService, Model],
    useFactory: (messageService: MessageService, model: Model) => {
      let subject = new Subject<SharedState>();
      subject.subscribe(m => messageService.reportMessage(
        new Message(MODES[m.mode] + (m.id !== undefined ? ` ${model.getProduct(m.id).name}` : ''))
      ));
      return subject;
    }
    //useValue: new Subject<SharedState>()
  }]
})

export class CoreModule {}