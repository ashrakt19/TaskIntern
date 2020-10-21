import { Component, OnInit, Input, Optional } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  faUser,
  faAddressBook,
  faCreditCard,
  faChevronLeft,
  faChevronRight,
  faSave,
  faBan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;



  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSave = faSave;

  faBan = faBan;
  selectedDestination: string;
  //firstform
  basicinfo = this.fb.group({
    eventName: ['Event Name', Validators.required],
    eventdesc: ['Event Description', Validators.required],
    message: ['Message', ],
    expiryDate: [ '', [ Validators.required]],
    shop: ['', Validators.required],
    PaymentOptions: ['', Validators.required],
    fees: ['', Validators.required],

  });
  //secondform
  Extraform = this.fb.group({
    category: [ 'Category', Validators.required],
    Eventdue: ['Event Duration', Validators.required],
    address: [' Event Address'],
    location: ['Event Location'],
    fblink: ['Facebook Link'],
    terms: ['Terms']

  });
  //thirdform
  
  ticketform = this.fb.group({
    ticketName: [ 'Ticket Name', Validators.required],
    Price: ['Price', Validators.required],
    quantity: ['Avalible Quantity', Validators.required],
    sell: ['Max Quantity Per Sell'],
    Tdesc: ['Ticket Description'],
    expiry: ['Ticket Expiry']

  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  Submit(frm: FormGroup) {
    console.log(frm);
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

}
