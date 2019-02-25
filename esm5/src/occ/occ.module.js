/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { OccConfig } from './config/occ-config';
import { Config, ConfigModule } from '../config/config.module';
import { defaultOccConfig } from './config/default-occ-config';
var OccModule = /** @class */ (function () {
    function OccModule() {
    }
    OccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ConfigModule.withConfig(defaultOccConfig)],
                    providers: [{ provide: OccConfig, useExisting: Config }]
                },] }
    ];
    return OccModule;
}());
export { OccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRDtJQUFBO0lBSXdCLENBQUM7O2dCQUp4QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2lCQUN6RDs7SUFDdUIsZ0JBQUM7Q0FBQSxBQUp6QixJQUl5QjtTQUFaLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtb2NjLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjQ29uZmlnKV0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogT2NjQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dXG59KVxuZXhwb3J0IGNsYXNzIE9jY01vZHVsZSB7fVxuIl19