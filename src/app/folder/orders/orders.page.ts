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
  orders = [
    {
      id: '001',
      customer: 'Juan Pérez',
      date: '2025-08-10',
      total: 125.50,
      status: 'pendiente',
      items: 3
    },
    {
      id: '002',
      customer: 'María García',
      date: '2025-08-10',
      total: 89.25,
      status: 'completado',
      items: 2
    },
    {
      id: '003',
      customer: 'Carlos López',
      date: '2025-08-09',
      total: 256.75,
      status: 'en-proceso',
      items: 5
    },
    {
      id: '004',
      customer: 'Ana Martínez',
      date: '2025-08-09',
      total: 45.00,
      status: 'cancelado',
      items: 1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completado':
        return 'success';
      case 'pendiente':
        return 'warning';
      case 'en-proceso':
        return 'primary';
      case 'cancelado':
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
    this.orders = this.orders.filter(o => o.id !== order.id);
  }

  addNewOrder() {
    console.log('Agregar nueva orden');
    // Aquí puedes implementar la creación de una nueva orden
  }
}
