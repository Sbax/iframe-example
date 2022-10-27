import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-another-view',
  templateUrl: './another-view.component.html',
  styleUrls: ['./another-view.component.scss'],
})
export class AnotherViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  baseUrl = '/echo';
  url: string = '';

  ngOnInit(): void {
    // get dyanmic params (eg /:id)
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.url = `${this.baseUrl}id/${params['id']}`;
      }
    });
  }
}
