import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-created-by-me',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-created-by-me.component.html',
  styleUrl: './employee-created-by-me.component.css'
})
export class EmployeeCreatedByMeComponent {
services=inject(MasterServicesService)
data:any;
_id:any;
Tickkets:any;
ngOnInit(){
this.data=localStorage.getItem('Employee');
this.data=JSON.parse(this.data)
this._id=this.data._id;
this.getTicketsById();
}

getTicketsById(){
  this.services.getTicketsById(this._id).subscribe({
next:(item:any)=>{
  this.Tickkets=item;
  console.log(item)
}
  })
}
deleteTicket(_id:string){
  let obj={
    _id:_id,
  };
console.log(obj)
  this.services.DeleteTickets(obj).subscribe((data:any)=>{
    console.log(data)
  this.getTicketsById();
        })
}

}
