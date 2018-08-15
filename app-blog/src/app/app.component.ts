import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem bla bla',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem bla bla',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon dernier post',
      content: 'Lorem bla bla',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
