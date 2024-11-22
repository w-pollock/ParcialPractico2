import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRoutingComponent } from './anime-routing.component';
import {  Routes } from '@angular/router';
import { AnimeListComponent } from '../anime-list/anime-list.component';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: AnimeListComponent
  },
  {
    path:':id',
    component: AnimeDetailComponent
  },
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeRoutingComponent]
})
export class AnimeRoutingModule { }
