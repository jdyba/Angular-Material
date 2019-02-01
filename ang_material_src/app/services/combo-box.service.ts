import { Elem } from './../models/elem';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ComboBoxService {

  listElem: Array<Elem>;

  triggerChoice: Array<string>;
  intTriggerChoice: Array<string>;
  constraintChoice: Array<string>;
  effectiveInfoChoice: Array<string>;
  procBasisrefChoice: Array<string>;

  constructor(private appService: AppService) {
    this.appService.getElemList().subscribe(list => {
      this.listElem = list;
      this.setComboBoxesValue();
    });
   }

   setComboBoxesValue() {
     this.triggerChoice = this.setList('trigger', 'Unique name for trigger number: ');
     this.intTriggerChoice = this.setList('interimtrigger', 'Now is unique name for interim trigger with number: ');
     this.constraintChoice = this.setList('constraint', 'Also unique name for constraint with number: ');
     this.effectiveInfoChoice = this.setList('lbmanEffectivedeadlineinfo', 'Special name for Effective dead line info: ');
     this.procBasisrefChoice = this.setList('lbmanProcbasisref', 'Last special name for Processing Basic reference type, number: ');
   }

   setList(nameProp: string, valueChoice: string) {
    let tempArr: Array<string>;
      if (this.listElem.length > 0) {
        const a = this.getMaxValue(nameProp);
        tempArr = this.createRandomArr(valueChoice, a);
      }
      return tempArr;
   }

   getMaxValue(nameProp: string): number {
    let a = 0;
    this.listElem.forEach(element => {
      if (element.hasOwnProperty(nameProp) && element[nameProp] > a) {
        a = element[nameProp];
      }
    });
    return a;
   }

   createRandomArr(nameValue: string, count: number): Array<string> {
    const tempArr = new Array<string>();
    for (let i = 0; i < count; i++) {
      const tempName = nameValue + (i + 1);
      tempArr.push(tempName);
    }
    return tempArr;
   }
}
