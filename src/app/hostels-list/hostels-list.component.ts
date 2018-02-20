import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
 public addHostelForm: FormGroup;
  constructor(private db: AngularFireDatabase, public formBuilder: FormBuilder, private authService: AuthService) {
      // form initialization
this.addHostelForm = this.formBuilder.group({
  name: ['', Validators.required],
  serviceAgents: ['', Validators.required],
});
  }

  ngOnInit() {
    this.hostelsObservable = this.getHostelList('/hostels');
     this.db.list('/hostels').valueChanges().subscribe(h => {
      console.log('h:', h);
      this.hostels = h;
    });
     this.authService.user.subscribe(u => {
      console.log('u:', u) ;
     this.user$ = u.email;
    });
  }
getHostelList(route) {
  return this.db.list(route).valueChanges();
}
// addHostel(field) {
//   this.hostels.push(
//     {
//       text: field.value,
//       user: this.user$.map(user => {
//         return user.email;
//       }),
//       createdAt: (new Date).toString(),
//       likes: 0

//     }
//   );
//   field.value = ' ';
// }
addHostel() {
  const inputV = this.addHostelForm.value;
  console.log(inputV);
  this.hostels.push(inputV);
  console.log(this.hostels);
}
like($key: string, count: number) {
 this.hostels.update($key, {likes: count + 1} );
}
deleteHostel($key: string) {
this.hostels.remove($key);
}
}
