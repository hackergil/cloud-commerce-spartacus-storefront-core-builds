import { MemoizedSelector } from '@ngrx/store';
import { BillingCountriesState, StateWithUser, BillingCountryEntities } from '../user-state';
import { Country } from '../../../model/address.model';
export declare const getBillingCountriesState: MemoizedSelector<StateWithUser, BillingCountriesState>;
export declare const getBillingCountriesEntites: MemoizedSelector<StateWithUser, BillingCountryEntities>;
export declare const getAllBillingCountries: MemoizedSelector<StateWithUser, Country[]>;
