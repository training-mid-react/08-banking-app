import { environment } from "../../../environment/environment";

export const urlResources = {
  user: `${environment.apiUrl}/user`,
  getPokemon: (pokemon: string) => `${environment.apiUrl}/pokemon/${pokemon}`,
  getUser: () => `${environment.apiBankUrl}/auth/login`,
  createUser: () => `${environment.apiBankUrl}/usuarios/crear`,

  depositFromATM: () => `${environment.apiBankUrl}/depositos/cajero`,
  withdrawFromATM: () => `${environment.apiBankUrl}/retiros/cajero`,
  depositFromBranch: () => `${environment.apiBankUrl}/depositos/sucursal`,
  depositFromExternal: () => `${environment.apiBankUrl}/depositos/otracuenta`,
  purchaseInStore: () => `${environment.apiBankUrl}/compras/fisico`,
  purchaseInWeb: () => `${environment.apiBankUrl}/compras/web`,
};