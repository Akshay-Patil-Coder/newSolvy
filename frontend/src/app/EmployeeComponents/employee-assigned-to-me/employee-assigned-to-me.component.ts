import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-assigned-to-me',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-assigned-to-me.component.html',
  styleUrl: './employee-assigned-to-me.component.css'
})
export class EmployeeAssignedToMeComponent {
  services=inject(MasterServicesService);

  data:any;
  _id:any;
  Tickkets:any;
  ngOnInit(){
  this.data=localStorage.getItem('Employee');
  this.data=JSON.parse(this.data)
  this._id=this.data._id;
  this.getTicketsByIdForName();
  }
  

 getTicketsByIdForName(){
  this.services.getTicketsByIdForAssigned(this._id).subscribe({
    next:(item:any)=>{
      this.Tickkets=item;
      console.log(item)
    }
      })
  }


  changestatus(_id:string,status:string){
    let obj={
      _id:_id,
      status:status
    };
    console.log();
    this.services.UpdateStatus(obj).subscribe((data:any)=>{
console.log(data)
this.getTicketsByIdForName();

    })
  }
  
  deleteTicket(_id:string){
    let obj={
      _id:_id,
    };
  console.log(obj)
    this.services.DeleteTickets(obj).subscribe((data:any)=>{
      console.log(data)
      this.getTicketsByIdForName();

          })
  }

}
