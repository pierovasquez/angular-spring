export class Cliente {
  id: number;
  nombre?: string;
  apellido?: string;
  createAt?: string;
  email?: string;
  constructor() {
    this.id = -1;
  }
}

export function initClient() {
  const initiClient: Cliente = {id: -1};
  return initClient;
}
