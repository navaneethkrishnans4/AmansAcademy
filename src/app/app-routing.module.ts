import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './blocks/course/course.component';
import { EventsComponent } from './blocks/events/events.component';
import { BlogsComponent } from './blocks/blogs/blogs.component';
import { ContactComponent } from './blocks/contact/contact.component';
import { TeachersComponent } from './blocks/teachers/teachers.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'events', component: EventsComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'teacher', component: TeachersComponent },
  { path: 'notice', component: NoticeComponent }
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }