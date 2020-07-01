import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  //formulario
  contact:any = {
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

  processForm(forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }else{
      Swal.fire('Message send','Thanks you for contact us', 'success' );
      forma.reset({
        fullname:'',
        phone:'',
        email:'',
        message:''
      });
    }
  }

}
