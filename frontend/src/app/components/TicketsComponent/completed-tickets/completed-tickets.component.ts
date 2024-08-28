import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../../services/master-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completed-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-tickets.component.html',
  styleUrl: './completed-tickets.component.css'
})
export class CompletedTicketsComponent {
  services=inject(MasterServicesService)
  data:any;
  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    let obj={
      status:"Completed"
    }
    this.services.TicketsByStatus(obj).subscribe({
      next: (item: any) => {
        this.data = item; 
        // this.data= JSON.parse(this.data);
        console.log(this.data); 
      },
      error: (err) => {
        console.error('Error fetching tickets:', err); // Handle errors
      }
    });
  }
  changestatus(_id:string,status:string){
    let obj={
      _id:_id,
      status:status
    };
    console.log();
    this.services.UpdateStatus(obj).subscribe((data:any)=>{
console.log(data)
this.getTickets();

    })
  }
  deleteTicket(_id:string){
    let obj={
      _id:_id,
    };
  console.log(obj)
    this.services.DeleteTickets(obj).subscribe((data:any)=>{
      console.log(data)
    this.getTickets();

          })
  }
}