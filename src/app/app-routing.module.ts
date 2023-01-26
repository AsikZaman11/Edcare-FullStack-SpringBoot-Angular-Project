import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { CourseComponent } from './course/course.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { Course4Component } from './course4/course4.component';
import { Course5Component } from './course5/course5.component';
import { GenpassComponent } from './genpass/genpass.component';
import { HelpComponent } from './help/help/help.component';
import { ParcesformComponent } from './parcesform/parcesform.component';
import { SubcriptionComponent } from './subscription/subcription/subcription.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path:'carts', component:CartComponent},
  {path:'saveparses',component:ParcesformComponent},
  {path:'login',component:GenpassComponent},
  {path:'course',component:CourseComponent},
  {path:'subcription', component:SubcriptionComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'help', component:HelpComponent},
  {path:'course1', component:Course1Component},
  {path:'course2', component:Course2Component},
  {path:'course3', component:Course3Component},
  {path:'course4',component:Course4Component},
  {path:'course5',component:Course5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
