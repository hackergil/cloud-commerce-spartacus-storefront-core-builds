import { LoaderState } from '../../state';
import { Address, PaymentDetails, OrderHistoryList, User, Region, Order, Country, Title } from '../../occ/occ-models/index';
export declare const USER_FEATURE = "user";
export declare const USER_PAYMENT_METHODS = "[User] User Payment Methods";
export declare const USER_ORDERS = "[User] User Orders";
export declare const USER_ADDRESSES = "[User] User Addresses";
export interface StateWithUser {
    [USER_FEATURE]: UserState;
}
export interface UserState {
    account: UserDetailsState;
    addresses: LoaderState<Address[]>;
    billingCountries: BillingCountriesState;
    countries: DeliveryCountriesState;
    payments: LoaderState<PaymentDetails[]>;
    orders: LoaderState<OrderHistoryList>;
    order: OrderDetailsState;
    titles: TitlesState;
    regions: RegionsState;
}
export interface OrderDetailsState {
    order: Order;
}
export interface RegionsState {
    entities: Region[];
}
export interface BillingCountryEntities {
    [key: string]: Country;
}
export interface BillingCountriesState {
    entities: BillingCountryEntities;
}
export interface DeliveryCountryEntities {
    [key: string]: Country;
}
export interface DeliveryCountriesState {
    entities: DeliveryCountryEntities;
}
export interface TitleEntities {
    [key: string]: Title;
}
export interface TitlesState {
    entities: TitleEntities;
}
export interface UserDetailsState {
    details: User;
}
