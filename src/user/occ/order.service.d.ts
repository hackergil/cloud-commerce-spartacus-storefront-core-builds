import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccConfig } from '../../occ/config/occ-config';
import { Order, OrderHistoryList } from '../../occ/occ-models/index';
export declare class OccOrderService {
    protected http: HttpClient;
    protected config: OccConfig;
    constructor(http: HttpClient, config: OccConfig);
    protected getOrderEndpoint(userId: string): string;
    placeOrder(userId: string, cartId: string): Observable<Order>;
    getOrders(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    getOrder(userId: string, orderCode: string): Observable<Order>;
}
