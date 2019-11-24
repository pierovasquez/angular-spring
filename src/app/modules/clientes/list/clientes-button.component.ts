import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from '@ag-grid-community/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-clientes-edit-button',
    template: `<app-custom-button (click)="onClick()">Edit</app-custom-button>`,
    styles: [``]
})
export class ClientesEditButtonComponent implements ICellRendererAngularComp {

    public cliente;
    rowIndex: number;

    constructor(
        private router: Router
    ) {

    }

    refresh(params: any): boolean {
        console.log('refresh', params);
        return false;
    }
    agInit(params: ICellRendererParams): void {
        this.cliente = params.data;
        this.rowIndex = params.rowIndex;

    }
    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        if (params) {
            console.log('attached', params);
        }
    }

    onClick() {
        this.router.navigate(['/shell/clientes/form', this.cliente.id])
    }

}
