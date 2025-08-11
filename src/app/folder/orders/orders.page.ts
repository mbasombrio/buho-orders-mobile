import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class OrdersPage implements OnInit {
  orderResponse = {
    rows: [{
      "deliveryAmount": 1.0,
      "user": {
        "id": 1,
        "name": "tom"
      },
      "id": 76,
      "index": 0,
      "type": "Normal",
      "open": "Jul 8, 2025 8:03:50 PM",
      "state": "Pending",
      "customer": {
        "customerType": "MINORISTA",
        "id": 61,
        "dni": 33300556,
        "city": "CABA ",
        "name": "Matias",
        "lastName": "Basombrio",
        "email": "m@gmail.com",
        "cellphone": "1140792077",
        "address": "Fernandez Blanco 2027",
        "zipCode": "1431",
        "checkingAccountEnabled": false,
        "password": "",
        "branch": {
          "id": 0
        },
        "enabled": true,
        "district": "Villa Urquiza",
        "state": "BS aS",
        "saldoFavor": 0.0,
        "listPrice": 3,
        "ivaSituation": "CONSUMIDOR_FINAL",
        "ctaCteLimitAmount": 0
      },
      "customerDelivery": {
        "id": 73,
        "city": "CABA ",
        "name": "Matias",
        "lastName": "Basombrio",
        "email": "m@gmail.com",
        "cellphone": "1140792077",
        "address": "Fernandez Blanco 2027",
        "zipCode": "1431",
        "state": "BS aS"
      },
      "items": [],
      "totalAmount": 27432375,
      "branch": {
        "id": 1,
        "businessName": "Default"
      }
    },
    {
      "deliveryAmount": 1.0,
      "user": {
        "id": 1,
        "name": "tom"
      },
      "id": 75,
      "index": 0,
      "type": "Normal",
      "open": "Jun 28, 2025 1:28:34 PM",
      "state": "Pending",
      "customer": {
        "customerType": "MINORISTA",
        "id": 61,
        "dni": 33300556,
        "city": "CABA ",
        "name": "Matias",
        "lastName": "Basombrio",
        "email": "m@gmail.com",
        "cellphone": "1140792077",
        "address": "Fernandez Blanco 2027",
        "zipCode": "1431",
        "checkingAccountEnabled": false,
        "password": "",
        "branch": {
          "id": 0
        },
        "enabled": true,
        "district": "Villa Urquiza",
        "state": "BS aS",
        "saldoFavor": 0.0,
        "listPrice": 3,
        "ivaSituation": "CONSUMIDOR_FINAL",
        "ctaCteLimitAmount": 0
      },
      "customerDelivery": {
        "id": 72,
        "city": "CABA ",
        "name": "Matias",
        "lastName": "Basombrio",
        "email": "m@gmail.com",
        "cellphone": "1140792077",
        "address": "Fernandez Blanco 2027",
        "zipCode": "1431",
        "state": "BS aS"
      },
      "items": [],
      "totalAmount": 901566046,
      "branch": {
        "id": 1,
        "businessName": "Default"
      }
    }
    ],
    "pagination": {
      "count": 2,
      "page": 1,
      "pages": 1,
      "size": 25
    }
  }

  constructor() { }

  ngOnInit() {
  }

  BasketOrderState = {
    Open: 'Abierto',
    Closed: 'Cerrado',
    Pending: 'Pendiente',
    Delivered: 'Entregado',
    Canceled: 'Cancelado',
    Invoiced: 'Facturado',
    cancelled: 'Cancelado',
    Approved: 'Aprobado',
  };

  toShowMoney = (value: number) => (value ? value / 100.0 : 0);

  showTotal(element:any) {
    let total = Number(this.toShowMoney(element.totalAmount));
    if (element.deliveryAmount) {
      total += Number(element.deliveryAmount);
    }
    return total;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Invoiced':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'en-proceso':
        return 'primary';
      case 'cancelled':
        return 'danger';
      default:
        return 'medium';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'completado':
        return 'Completado';
      case 'pendiente':
        return 'Pendiente';
      case 'en-proceso':
        return 'En Proceso';
      case 'cancelado':
        return 'Cancelado';
      default:
        return status;
    }
  }

  viewOrderDetails(order: any) {
    console.log('Ver detalles de la orden:', order);
    // Aquí puedes implementar la navegación a los detalles de la orden
  }

  editOrder(order: any) {
    console.log('Editar orden:', order);
    // Aquí puedes implementar la edición de la orden
  }

  deleteOrder(order: any) {
    console.log('Eliminar orden:', order);
    // Aquí puedes implementar la eliminación de la orden
    //this.orders = this.orders.filter(o => o.id !== order.id);
  }

  addNewOrder() {
    console.log('Agregar nueva orden');
    // Aquí puedes implementar la creación de una nueva orden
  }
}
