import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ParcesformComponent } from './parcesform/parcesform.component';
import { GenpassComponent } from './genpass/genpass.component';
import { CourseComponent } from './course/course.component';
import { SubcriptionComponent } from './subscription/subcription/subcription.component';
import { AboutComponent } from './about/about/about.component';
import { HelpComponent } from './help/help/help.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { FooterComponent } from './footer/footer/footer.component';
import { Course3Component } from './course3/course3.component';
import { Course4Component } from './course4/course4.component';
import { Course5Component } from './course5/course5.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent,
    FilterPipe,
    ParcesformComponent,
    GenpassComponent,
    CourseComponent,
    SubcriptionComponent,
    AboutComponent,
    HelpComponent,
    Course1Component,
    Course2Component,
    FooterComponent,
    Course3Component,
    Course4Component,
    Course5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
