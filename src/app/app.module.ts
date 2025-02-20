import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderComponent } from './blocks/slider/slider.component';
import { BannerFeatureComponent } from './blocks/banner-feature/banner-feature.component';
import { AboutComponent } from './components/about/about.component';
import { CtaComponent } from './blocks/cta/cta.component';
import { SuccessStoryComponent } from './blocks/success-story/success-story.component';
import { EventsComponent } from './blocks/events/events.component';
import { TeachersComponent } from './blocks/teachers/teachers.component';
import { BlogsComponent } from './blocks/blogs/blogs.component';
import {FooterComponent} from './components/footer/footer.component'
import { BlockFooterComponent } from './blocks/footer/footer.component';
import { CourseComponent } from './blocks/course/course.component';
import { PageTitleComponent } from './blocks/page-title/page-title.component';
import { BlocksAboutUsComponent } from './blocks/blocks-about-us/blocks-about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { NoticeComponent } from './notice/notice.component';
import { ContactComponent } from './blocks/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SliderComponent,
    BannerFeatureComponent,
    AboutComponent,
    CtaComponent,
    SuccessStoryComponent,
    EventsComponent,
    TeachersComponent,
    BlogsComponent,
    BlockFooterComponent,
    FooterComponent,
    CourseComponent,
    PageTitleComponent,
    BlocksAboutUsComponent,
    BlogComponent,
    BlogSingleComponent,
    NoticeComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
