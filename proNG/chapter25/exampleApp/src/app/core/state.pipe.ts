import { Pipe, PipeTransform } from "@angular/core";
import { Model } from '../model/repository.model';
import { SharedState, MODES } from './sharedState.model';

@Pipe({
    name: 'formatState',
    pure: true
})
export class StatePipe implements PipeTransform {
    constructor(private model: Model) { }
    transform(value: any): string {
        if(value instanceof SharedState) {
            let state = value as SharedState;
            return MODES[state.mode] + (state.id !== undefined ? ` ${this.model.getProduct(state.id).name}` : '');
        }
        return '<No Data>';
    }
}