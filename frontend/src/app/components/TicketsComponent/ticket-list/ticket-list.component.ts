import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../../services/master-services.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  services=inject(MasterServicesService)
  data:any;
  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    this.services.FullTickets().subscribe({
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
