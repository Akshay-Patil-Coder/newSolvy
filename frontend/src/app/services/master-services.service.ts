import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterServicesService {

  constructor(private http:HttpClient) { }

  //Head services started

 login(obj:any){
  return this.http.post('http://localhost:3000/loginHead',obj);

  };

  isAuthenticated(): boolean {
    const adminJson = localStorage.getItem('Admin');
        if (adminJson) {
      try {
        const admin = JSON.parse(adminJson);
        if (admin.name === 'admin') {
          return true;
        }
      } catch (e) {
        console.error('Error parsing JSON from localStorage', e);
      }
    }
      return false;
  }

  FullTickets(){
    return this.http.get('http://localhost:3000/getTickets');
  }
getTicketsById(_id:any){
  return this.http.get('http://localhost:3000/getTicketsById/'+_id);

}
getTicketsByIdForAssigned(_id:any){
  return this.http.get('http://localhost:3000/getTicketsByIdForAssigned/'+_id);

}
  UpdateStatus(obj:any){
return this.http.put('http://localhost:3000/updateStatusOfTicket',obj)
  }

TicketsByStatus(obj:any){
    return this.http.post('http://localhost:3000/findstatus',obj);
  }

 DeleteTickets(obj:any){
    return this.http.delete('http://localhost:3000/deleteTickets/'+obj._id);
  }

  allUsers(){
    return this.http.get('http://localhost:3000/getUsers');
  }
  createUsers(obj:any){
    return this.http.post('http://localhost:3000/createUsers',obj)
  }
  getDepartment(){
    return this.http.get('http://localhost:3000/getDepartments')
  }
  getDepartmentsForUpdate(_id:any){
    return this.http.get('http://localhost:3000/getDepartmentsForUpdate/'+_id)
  }
  DepartmentsForUpdate(obj:any){
    return this.http.put('http://localhost:3000/DepartmentsForUpdate',obj)
 }
   createDepartment(obj:any){
    return this.http.post('http://localhost:3000/createDepartment',obj)
  }
  deleteDepartment(obj:any){
    return this.http.delete('http://localhost:3000/deleteDepartment/'+obj._id)
  }
  deleteUsers(obj:any){
    return this.http.delete('http://localhost:3000/deleteUser/'+obj._id)
  }
  createParentCategory(obj:any){
     return this.http.post('http://localhost:3000/createParentCategory',obj)
  }
  getParentCategory(){
    return this.http.get('http://localhost:3000/getCategories')
 }
  getParentCategoryById(department:any){
  return this.http.get<any[]>('http://localhost:3000/getCategoriesById/'+department);
}
ParentCategoriesForUpdate(_id:any){
  return this.http.get('http://localhost:3000/ParentCategoriesForUpdate/'+_id)
}
NowUpdateParentCategory(obj:any){
  return this.http.put('http://localhost:3000/NowUpdateParentCategory',obj)
}
getChildCategoryById(_id:any){
  return this.http.get<any[]>('http://localhost:3000/getChildCategories/'+_id);
}
 deleteParentCategory(obj:any){
  return this.http.delete('http://localhost:3000/deleteCategories/'+obj._id)

 }
 createChildCategory(obj:any){
  return this.http.post('http://localhost:3000/createChildCategory',obj)

 }
 deleteChildCategory(obj:any){
  return this.http.post('http://localhost:3000/deleteChildCategory',obj)

 }
 //users service started
 
 Userlogin(obj:any){
  return this.http.post('http://localhost:3000/loginUser',obj);

  };
  
    UserisAuthenticated(): boolean {
      const adminJson = localStorage.getItem('Employee');
          if (adminJson) {
        try {
          const admin = JSON.parse(adminJson);
          if (admin.name === 'employee') {
            return true;
          }
        } catch (e) {
          console.error('Error parsing JSON from localStorage', e);
        }
      }
        return false;
    };
      CreateTicket(obj:any){
        return this.http.post('http://localhost:3000/createTickets',obj);
      }
  getUsersByidforUpdate(_id:string){
    return this.http.get('http://localhost:3000/getUsersByidforUpdate/'+_id)
  }
  UpdateUserForUpdate(obj:any){
    return this.http.put('http://localhost:3000/updateUser',obj)
  }
  
}
