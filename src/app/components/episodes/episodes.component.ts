import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import {IEpisode, } from "../../interfaces";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, AfterViewInit {
  episodes: IEpisode[]
  total_count: number;

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams: {page: page.pageIndex + 1}})
    })
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ({episodes}) => {
      this.episodes = episodes.results;
      this.total_count = episodes.info.count
    })
  }

}
