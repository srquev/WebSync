import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JsEditorComponent } from './js-editor/js-editor.component';
import { ServicesComponent } from './services/services.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { BlogsComponent } from './blogs/blogs.component';
import EditorJS from '@editorjs/editorjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsEditorComponent,
    ServicesComponent,
    BlogsComponent,
    OurWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorJS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
