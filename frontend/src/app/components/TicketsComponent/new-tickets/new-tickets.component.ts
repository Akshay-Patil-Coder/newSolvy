import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../../services/master-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {
  services=inject(MasterServicesService)
  data:any;
  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    let obj={
      status:"Created"
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
 
    this.services.UpdateStatus(obj).subscribe((data:any)=>{
console.log(data)
this.getTickets();

    })
  }
  deleteTicket(_id:string){
    let obj={
      _id:_id,
    };
    this.services.DeleteTickets(obj).subscribe((data:any)=>{
      console.log(data)
      this.getTickets();

          })
  }
}
