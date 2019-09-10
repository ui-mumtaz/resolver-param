import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Component({
  templateUrl: './contactus.component.html',
})
export class ContactusComponent implements OnInit{
  private loading: Boolean;
  public data:any;

  constructor(private http: HttpClient) { }
  title = 'resolver-param';

  ngOnInit() {
   const request = this.getPosts();
   this.setLoadingSpinner(request);

   request.subscribe(data => {
     console.log(data);
     this.data = data;
   })
  }
  setLoadingSpinner(observable: Observable<any>) {
    this.loading = true;
    observable.subscribe(()=> this.loading = false)
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>
    ('https://jsonplaceholder.typicode.com/posts')
    .pipe(share());
  }
}
