import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ['https://thefriedegg.com/', 'https://refuge.nolayingup.com/', 'https://bixbycoffee.com/account/login?return_url=%2Faccount'];

  constructor() { }

  ngOnInit() {
  }

}
