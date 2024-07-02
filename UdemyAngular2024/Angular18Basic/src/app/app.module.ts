import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from './components/shared/shared.module';
import { TasksModule } from './components/tasks/tasks.module';

@NgModule({
  // declare all the components / directives of the module.
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}

/*
  Delcarations are all the components that make up the all the components that are used in the component.
  imports are extra modules that utilzied inside of those components
  Bootstrap is the top level node that gets renderered when the module gets loaded for the application, it should only be one per application?
*/
