import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ClientesComponent } from 'src/app/modules/clientes/list/clientes.component';
import { ClientesFormComponent } from 'src/app/modules/clientes/form/clientes-form.component';

@Injectable()
export class DataEditGuard implements CanDeactivate<ClientesFormComponent> {

    canDeactivate(component: ClientesFormComponent): boolean {
        if (component.isDirty) {
            const title = component.title || 'Nuevo Cliente';
            return confirm(`Perder todos los cambios de ${title}`);
        }
        return true;
    }
}
