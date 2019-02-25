import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store/index';
import { Order, User, PaymentDetails, Address, Title, Country, Region, OrderHistoryList } from '../../occ/occ-models/index';
import { UserRegisterFormData } from '../model/user.model';
export declare class UserService {
    private store;
    constructor(store: Store<fromStore.StateWithUser>);
    /**
     * Returns a user
     */
    get(): Observable<User>;
    /**
     * Loads the user's details
     */
    load(userId: string): void;
    /**
     * Register a new user
     *
     * @param submitFormData as UserRegisterFormData
     */
    register(userRegisterFormData: UserRegisterFormData): void;
    /**
     * Returns an order's detail
     */
    getOrderDetails(): Observable<Order>;
    /**
     * Retrieves order's details
     *
     * @param userId a user's ID
     * @param orderCode an order code
     */
    loadOrderDetails(userId: string, orderCode: string): void;
    /**
     * Clears order's details
     */
    clearOrderDetails(): void;
    /**
     * Returns order history list
     */
    getOrderHistoryList(userId: string, pageSize: number): Observable<OrderHistoryList>;
    /**
     * Returns a loaded flag for order history list
     */
    getOrderHistoryListLoaded(): Observable<boolean>;
    /**
     * Loads all user's payment methods.
     * @param userId a user ID
     */
    loadPaymentMethods(userId: string): void;
    /**
     * Returns all user's payment methods
     */
    getPaymentMethods(): Observable<PaymentDetails[]>;
    /**
     * Returns a loading flag for payment methods
     */
    getPaymentMethodsLoading(): Observable<boolean>;
    /**
     * Sets the payment as a default one
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    setPaymentMethodAsDefault(userId: string, paymentMethodId: string): void;
    /**
     * Deletes the payment method
     *
     * @param userId a user ID
     * @param paymentMethodId a payment method ID
     */
    deletePaymentMethod(userId: string, paymentMethodId: string): void;
    /**
     * Retrieves an order list
     * @param userId a user ID
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderList(userId: string, pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Retrieves user's addresses
     * @param userId a user ID
     */
    loadAddresses(userId: string): void;
    /**
     * Adds user address
     * @param userId a user ID
     * @param address a user address
     */
    addUserAddress(userId: string, address: Address): void;
    /**
     * Sets user address as default
     * @param userId a user ID
     * @param addressId a user address ID
     */
    setAddressAsDefault(userId: string, addressId: string): void;
    /**
     * Updates existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     * @param address a user address
     */
    updateUserAddress(userId: string, addressId: string, address: Address): void;
    /**
     * Deletes existing user address
     * @param userId a user ID
     * @param addressId a user address ID
     */
    deleteUserAddress(userId: string, addressId: string): void;
    /**
     * Returns addresses
     */
    getAddresses(): Observable<Address[]>;
    /**
     * Returns a loading flag for addresses
     */
    getAddressesLoading(): Observable<boolean>;
    /**
     * Returns titles
     */
    getTitles(): Observable<Title[]>;
    /**
     * Retrieves titles
     */
    loadTitles(): void;
    /**
     * Retrieves delivery countries
     */
    loadDeliveryCountries(): void;
    /**
     * Returns all delivery countries
     */
    getDeliveryCountries(): Observable<Country[]>;
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    getCountry(isocode: string): Observable<Country>;
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    loadRegions(countryIsoCode: string): void;
    /**
     * Returns all regions
     */
    getRegions(): Observable<Region[]>;
    /**
     * Returns all billing countries
     */
    getAllBillingCountries(): Observable<Country[]>;
    /**
     * Retrieves billing countries
     */
    loadBillingCountries(): void;
    /**
     * Cleaning order list
     */
    clearOrderList(): void;
}
