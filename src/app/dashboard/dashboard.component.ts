import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../shared/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  editMode: boolean = false;
  editIndex: number;
  enable: boolean = false;
  new: boolean = false;
  UserData: {
    ordernumber: number;
    DueDate: string;
    name: string;
    address: string;
    phonenumber: any;
    ordertotal: number;
  }[] = [];

  Form: FormGroup;

  subscription: Subscription;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.Form = new FormGroup({
      ordernumber: new FormControl(null, Validators.required),
      DueDate: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, Validators.required),
      ordertotal: new FormControl(null, Validators.required),
    });

    this.UserData = this.storageService.get();
    this.subscription = this.storageService.UserdataChanged.subscribe(
      (data: any) => {
        this.UserData = data;
      }
    );
  }
  delete(index: number) {
    this.storageService.delete(index);
    this.editIndex = null;
    this.editMode = false;
    this.new = false;

    this.Form.reset();
  }

  onCancel() {
    this.editIndex = null;
    this.editMode = false;
    this.new = false;

    this.Form.reset();
  }
  onSubmit() {
    if (this.editMode) {
      this.storageService.patch(this.editIndex, this.Form.value);
    } else {
      this.storageService.add(this.Form.value);
    }
    this.editIndex = null;
    this.editMode = false;
    this.new = false;

    this.Form.reset();
  }

  onEdit(index: number) {
    this.new = true;
    this.editMode = true;
    this.new = true;
    this.editIndex = index;

    let item = this.storageService.getItem(index);
    console.log(item);

    this.Form.setValue({
      ordernumber: item.ordernumber,
      DueDate: item.DueDate,
      name: item.name,
      address: item.address,
      phonenumber: item.phonenumber,
      ordertotal: item.ordertotal,
    });
  }
  ngonDestroy(): void {
    this.subscription.unsubscribe();
  }
}
