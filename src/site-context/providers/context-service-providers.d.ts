import { Provider } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { OccConfig } from '../../occ/config/occ-config';
export declare function inititializeContext(config: OccConfig, langService: LanguageService, currService: CurrencyService): () => void;
export declare const contextServiceProviders: Provider[];
