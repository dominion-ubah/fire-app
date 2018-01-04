import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-user-customer-list',
  templateUrl: './user-customer-list.component.html',
  styleUrls: ['./user-customer-list.component.scss']
})
export class UserCustomerListComponent implements OnInit {
  hostelsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.hostelsObservable = this.getHostel('/users-customers');
    const lol = this.hostelsObservable ? this.hostelsObservable : 'nill';
    console.log('hi' , lol);
  }
  getHostel(listPath): Observable<any[]> {
    const doa = this.db.list(listPath).valueChanges();
    console.log( doa );
    return doa;
  }
}
