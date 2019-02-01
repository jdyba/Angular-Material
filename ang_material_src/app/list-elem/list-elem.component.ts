import { Component, OnInit, ViewChild } from '@angular/core';
import { Elem } from '../models/elem';
import { AppService } from '../services/app.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ComboBoxService } from '../services/combo-box.service';


@Component({
  selector: 'app-list-elem',
  templateUrl: './list-elem.component.html',
  styleUrls: ['./list-elem.component.css']
})
export class ListElemComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'trigger', 'interimtrigger', 'lbmanEffectivedeadlineinfo', 'icons'];
  elementsList: Array<Elem>;
  dataSource = new MatTableDataSource(this.elementsList);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private myService: AppService, public cmbService: ComboBoxService) {
    this.myService.getElemList().subscribe(list => {
      this.elementsList = list;
      this.dataSource.data = this.elementsList;
     });
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  goToNew() { this.myService.setAddNew(true); }
}
