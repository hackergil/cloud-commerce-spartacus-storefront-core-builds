/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 * @template T
 * @param {?} entityType
 * @param {?} reducer
 * @return {?}
 */
export function entityReducer(entityType, reducer) {
    return function (state, action) {
        if (state === void 0) { state = initialEntityState; }
        /** @type {?} */
        var ids;
        /** @type {?} */
        var partitionPayload = false;
        if (action.meta &&
            action.meta.entityType === entityType &&
            action.meta.entityId !== undefined) {
            ids = [].concat(action.meta.entityId);
            // remove selected entities
            if (action.meta.entityRemove) {
                if (action.meta.entityId === null) {
                    return initialEntityState;
                }
                else {
                    /** @type {?} */
                    var removed_1 = false;
                    /** @type {?} */
                    var newEntities = Object.keys(state.entities).reduce(function (acc, cur) {
                        if (ids.indexOf(cur) > -1) {
                            removed_1 = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed_1 ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        var entityUpdates = {};
        for (var i = 0; i < ids.length; i++) {
            /** @type {?} */
            var id = ids[i];
            /** @type {?} */
            var subAction = partitionPayload
                ? tslib_1.__assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            var newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, entityUpdates) });
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sS0FBTyxrQkFBa0IsR0FBcUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOzs7Ozs7Ozs7O0FBT3BFLE1BQU0sVUFBVSxhQUFhLENBQzNCLFVBQWtCLEVBQ2xCLE9BQXdDO0lBRXhDLE9BQU8sVUFDTCxLQUEwQyxFQUMxQyxNQUFvQjtRQURwQixzQkFBQSxFQUFBLDBCQUEwQzs7WUFHdEMsR0FBYTs7WUFDYixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFDbEM7WUFDQSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRDLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDakMsT0FBTyxrQkFBa0IsQ0FBQztpQkFDM0I7cUJBQU07O3dCQUNELFNBQU8sR0FBRyxLQUFLOzt3QkFDYixXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0JBQzlELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs0QkFDekIsU0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDaEI7NkJBQU07NEJBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hDO3dCQUNELE9BQU8sR0FBRyxDQUFDO29CQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBRU4sT0FBTyxTQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3BEO2FBQ0Y7WUFFRCxnQkFBZ0I7Z0JBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7O1lBRUssYUFBYSxHQUF3QixFQUFFO1FBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDN0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O2dCQUNYLFNBQVMsR0FBRyxnQkFBZ0I7Z0JBQ2hDLENBQUMsc0JBQU0sTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUN6QyxDQUFDLENBQUMsTUFBTTs7Z0JBQ0osUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQztZQUN2RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6Qyw0QkFDSyxLQUFLLElBQ1IsUUFBUSx1QkFBTyxLQUFLLENBQUMsUUFBUSxFQUFLLGFBQWEsS0FDL0M7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eVN0YXRlIH0gZnJvbSAnLi9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9uJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxFbnRpdHlTdGF0ZTogRW50aXR5U3RhdGU8YW55PiA9IHsgZW50aXRpZXM6IHt9IH07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgZm9yIHJldXNpbmcgcmVkdWNlciBsb2dpYyBmb3IgbXVsdGlwbGUgZW50aXRpZXNcbiAqXG4gKiBVdGlsaXplcyBlbnRpdHlJZCBtZXRhIGZpZWxkIHRvIHRhcmdldCBlbnRpdHkgYnkgaWQgaW4gYWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVkdWNlcjxUPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyOiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogRW50aXR5U3RhdGU8VD4gPSBpbml0aWFsRW50aXR5U3RhdGUsXG4gICAgYWN0aW9uOiBFbnRpdHlBY3Rpb25cbiAgKTogRW50aXR5U3RhdGU8VD4gPT4ge1xuICAgIGxldCBpZHM6IHN0cmluZ1tdO1xuICAgIGxldCBwYXJ0aXRpb25QYXlsb2FkID0gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGlkcyA9IFtdLmNvbmNhdChhY3Rpb24ubWV0YS5lbnRpdHlJZCk7XG5cbiAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBlbnRpdGllc1xuICAgICAgaWYgKGFjdGlvbi5tZXRhLmVudGl0eVJlbW92ZSkge1xuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuZW50aXR5SWQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbEVudGl0eVN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgbmV3RW50aXRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKGN1cikgPiAtMSkge1xuICAgICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY1tjdXJdID0gc3RhdGUuZW50aXRpZXNbY3VyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgcmV0dXJuIHJlbW92ZWQgPyB7IGVudGl0aWVzOiBuZXdFbnRpdGllcyB9IDogc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFydGl0aW9uUGF5bG9hZCA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkoYWN0aW9uLm1ldGEuZW50aXR5SWQpICYmIEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZHMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5VXBkYXRlczogeyBbaWQ6IHN0cmluZ106IFQgfSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gaWRzW2ldO1xuICAgICAgY29uc3Qgc3ViQWN0aW9uID0gcGFydGl0aW9uUGF5bG9hZFxuICAgICAgICA/IHsgLi4uYWN0aW9uLCBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZFtpXSB9XG4gICAgICAgIDogYWN0aW9uO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLmVudGl0aWVzW2lkXSwgc3ViQWN0aW9uKTtcbiAgICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgICBlbnRpdHlVcGRhdGVzW2lkXSA9IG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhlbnRpdHlVcGRhdGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHsgLi4uc3RhdGUuZW50aXRpZXMsIC4uLmVudGl0eVVwZGF0ZXMgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=