import { Subject } from 'rxjs';

export class StorageService {
  UserdataChanged = new Subject();

  UserData: {
    ordernumber: number;
    DueDate: string;
    name: string;
    address: string;
    phonenumber: any;
    ordertotal: number;
  }[] = [
    {
      ordernumber: 25,
      DueDate: '18/04/2022',
      name: 'Rai Bahaduri',
      address: 'Hyderabad',
      phonenumber: 8965412321,
      ordertotal: 3,
    },
    {
      ordernumber: 25,
      DueDate: '17/04/2022',
      name: 'Rai Bahadur',
      address: 'Hyderabad',
      phonenumber: 8956412585,
      ordertotal: 3,
    },
    {
      ordernumber: 25,
      DueDate: '17/04/2022',
      name: 'Rai Bahadur',
      address: 'Hyderabad',
      phonenumber: 8956412585,
      ordertotal: 3,
    },
  ];

  add(data: any) {
    this.UserData.push(data);
    this.UserdataChanged.next(this.UserData.slice());
  }

  get() {
    return this.UserData.slice();
  }

  getItem(index: number) {
    return this.UserData[index];
  }

  delete(index: number) {
    this.UserData.splice(index, 1);
    this.UserdataChanged.next(this.UserData.slice());
  }
  patch(index: number, data: any) {
    this.UserData[index] = data;
    this.UserdataChanged.next(this.UserData.slice());
  }
}
