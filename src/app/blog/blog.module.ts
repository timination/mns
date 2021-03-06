import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BlogListComponent, TopicDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ]
})
export class BlogModule { }
