import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ComboBoxService } from '../services/combo-box.service';

@Component({
  selector: 'app-form-schema',
  templateUrl: './form-schema.component.html',
  styleUrls: ['./form-schema.component.css']
})
export class FormSchemaComponent implements OnInit {

  addElem: FormGroup;
  trigOpt: string[] = ['Lawful', 'Service Category', 'Item'];
  lastOptions: Array<string> = ['purma', 'nntm', 'pdb', 'dsart'];

  constructor(private serv: AppService, public cmbServ: ComboBoxService) {
    this.addElem = this.createForm();
  }

  ngOnInit() {
  }

  createForm(): FormGroup {
    const temp = new FormGroup({
      name: new FormControl(null, Validators.required),
      triggerName: new FormControl(null, Validators.required),
      trigDateKnw: new FormControl(null),
      isInterim: new FormControl(null),
      intTriggerName: new FormControl(null),
      constraintName: new FormControl(null, Validators.required),
      constValKnw: new FormControl(null),
      effectiveInfo: new FormControl(null, Validators.required),
      relProcess: new FormControl(null),
      options: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
      describe: new FormControl(null)
    });
    return temp;
  }

  goToList() { this.serv.setAddNew(false); }

  onSubmit() {
    if (this.addElem.valid === true)  {
      console.log('saved');
      this.onReset();
    }
  }

  onReset() {
    this.addElem.reset({
    });
  }
}
