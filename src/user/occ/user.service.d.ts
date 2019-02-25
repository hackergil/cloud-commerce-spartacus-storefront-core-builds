import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegisterFormData } from '../model/user.model';
import { OccConfig } from '../../occ/config/occ-config';
import { User, Address, AddressValidation, AddressList, PaymentDetailsList } from '../../occ/occ-models/index';
export declare class OccUserService {
    protected http: HttpClient;
    protected config: OccConfig;
    constructor(http: HttpClient, config: OccConfig);
    loadUser(userId: string): Observable<User>;
    verifyAddress(userId: string, address: Address): Observable<AddressValidation>;
    loadUserAddresses(userId: string): Observable<AddressList>;
    addUserAddress(userId: string, address: Address): Observable<{}>;
    updateUserAddress(userId: string, addressId: string, address: Address): Observable<{}>;
    deleteUserAddress(userId: string, addressId: string): Observable<{}>;
    loadUserPaymentMethods(userId: string): Observable<PaymentDetailsList>;
    deleteUserPaymentMethod(userId: string, paymentMethodID: string): Observable<{}>;
    setDefaultUserPaymentMethod(userId: string, paymentMethodID: string): Observable<{}>;
    registerUser(user: UserRegisterFormData): Observable<User>;
    protected getUserEndpoint(): string;
}
