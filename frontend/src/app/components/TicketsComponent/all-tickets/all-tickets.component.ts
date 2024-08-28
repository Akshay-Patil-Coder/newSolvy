import { Component } from '@angular/core';
import { CompletedTicketsComponent } from '../completed-tickets/completed-tickets.component';
import { DeletedTicketsComponent } from '../deleted-tickets/deleted-tickets.component';
import { InprogressTicketComponent } from '../inprogress-ticket/inprogress-ticket.component';
import { NewTicketsComponent } from '../new-tickets/new-tickets.component';
import { TicketListComponent } from '../ticket-list/ticket-list.component';

@Component({
  selector: 'app-all-tickets',
  standalone: true,
  imports: [CompletedTicketsComponent,DeletedTicketsComponent,InprogressTicketComponent,NewTicketsComponent,TicketListComponent],
  templateUrl: './all-tickets.component.html',
  styleUrl: './all-tickets.component.css'
})
export class AllTicketsComponent {
changable="Home";

}
