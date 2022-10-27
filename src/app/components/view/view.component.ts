import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  baseUrl = '/echo';

  url: string = '';

  ngOnInit() {
    // get query params (eg ?search=abcde)
    this.route.queryParams.subscribe((params) => {
      const queryParamsString = new URLSearchParams(params).toString();

      this.url = [this.baseUrl, queryParamsString].filter(Boolean).join('?');
    });
  }
}
