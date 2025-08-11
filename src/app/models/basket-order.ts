import { User } from "@models/user";
import * as moment from "moment";
import { Branch } from "./branch";
import { BasketCustomer, BasketItem } from "./carrito";
import { Customer } from "./customer";

export interface BasketOrder {
  id: number;
  index: number;
  type: string;
  open: Date;
  state: string;
  operator: string;
  customer: Customer;
  customerDelivery: BasketCustomer;
  items: BasketItem[];
  totalAmount: number;
  branch: Branch;
  send: string;
  payment: string;
  paymentStatus: string;
  deliveryAmount: number;
  user: User;
  observation: string;
}

export class BasketFilter {
  dateFrom: string;
  dateTo: string;
  customerName: string | null;
  basketId: number | null;
  state: string;
  branch: number;
  page: number;
  userId: number | null;
  period

  constructor() {
    this.dateFrom = moment(new Date()).format("MM/DD/YYYY");
    this.dateTo = moment(new Date()).format("MM/DD/YYYY");
    this.customerName = null;
    this.basketId = null;
    this.userId = null;
    this.state = 'pending';
    this.branch = 9999999;
    this.period = 'today';
    this.page = 1;
  }
}

export const BasketOrderState = {
  Open: 'Abierto',
  Closed: 'Cerrado',
  Pending: 'Pendiente',
  Delivered: 'Entregado',
  Canceled: 'Cancelado',
  Invoiced: 'Facturado',
  cancelled: 'Cancelado',
  Approved: 'Aprobado',
};
