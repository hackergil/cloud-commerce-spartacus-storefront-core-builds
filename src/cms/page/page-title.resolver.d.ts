import { Observable } from 'rxjs';
import { PageType } from '../../occ';
import { Page } from '../model/page.model';
export declare abstract class PageTitleResolver {
    pageType: PageType;
    pageTemplate: string;
    abstract resolve(): Observable<string>;
    getScore(page: Page): number;
}
