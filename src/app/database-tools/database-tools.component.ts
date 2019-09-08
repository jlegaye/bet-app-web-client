import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-database-tools',
  templateUrl: './database-tools.component.html',
  styleUrls: ['./database-tools.component.css']
})
export class DatabaseToolsComponent implements OnInit {

  constructor(private es: EventsService) { }

  ngOnInit() {
  }

  refreshLastSeasonEvents() {
    console.log('refresh last Events')
    this.es.refreshLastSeason()
  }

}
