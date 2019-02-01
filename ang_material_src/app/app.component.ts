import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Elem } from './models/elem';
import { ComboBoxService } from './services/combo-box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdd: boolean;
  constructor(private serv: AppService) {
   }

   ngOnInit() {
    this.serv.getAddNew().subscribe( item => {
      this.isAdd = item;
    });
   }
}
