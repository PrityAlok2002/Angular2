import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  // {
  //   path:'',redirectTo:'student',pathMatch:'full'
  // },
  // {
  //   path:'student',component:StudentComponent
  // },
  // {
  //   path:'studentdetails',component:StudentdetailsComponent  
  // },
  // {
  //   path:'teacher',component:TeacherComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
