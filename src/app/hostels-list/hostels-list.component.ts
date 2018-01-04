import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hostels-list',
  templateUrl: './hostels-list.component.html',
  styleUrls: ['./hostels-list.component.scss']
})
export class HostelsListComponent implements OnInit {
 public hostelsObservable: Observable<any[]>;
 public hostels;
 public user$;
  constructor(private db: AngularFireDatabase, private authService: AuthService) { }

  ngOnInit() {
    this.hostelsObservable = this.getHostelList('/hostels');
    this.hostels = this.db.list('/hostels');
    this.user$ = this.authService.user;
  }
getHostelList(route) {
  return this.db.list(route).valueChanges();
}
addHostel(field) {
  this.hostels.push(
    {
      text: field.value,
      user: this.user$.map(user => {
        return user.email;
      }),
      createdAt: (new Date).toString(),
      likes: 0

    }
  );
  field.value = ' ';
}
like($key: string, count: number) {
 this.hostels.update($key, {likes: count + 1} );
}
deleteHostel($key: string) {
this.hostels.remove($key);
}
}
