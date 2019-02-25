/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const initialEntityState = { entities: {} };
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
    return (state = initialEntityState, action) => {
        /** @type {?} */
        let ids;
        /** @type {?} */
        let partitionPayload = false;
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
                    let removed = false;
                    /** @type {?} */
                    const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
                        if (ids.indexOf(cur) > -1) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            /** @type {?} */
            const id = ids[i];
            /** @type {?} */
            const subAction = partitionPayload
                ? Object.assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, entityUpdates) });
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxPQUFPLGtCQUFrQixHQUFxQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7QUFPcEUsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsVUFBa0IsRUFDbEIsT0FBd0M7SUFFeEMsT0FBTyxDQUNMLFFBQXdCLGtCQUFrQixFQUMxQyxNQUFvQixFQUNKLEVBQUU7O1lBQ2QsR0FBYTs7WUFDYixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFDbEM7WUFDQSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRDLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDakMsT0FBTyxrQkFBa0IsQ0FBQztpQkFDM0I7cUJBQU07O3dCQUNELE9BQU8sR0FBRyxLQUFLOzswQkFDYixXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNsRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7NEJBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBQ2hCOzZCQUFNOzRCQUNMLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNoQzt3QkFDRCxPQUFPLEdBQUcsQ0FBQztvQkFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUVOLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUNwRDthQUNGO1lBRUQsZ0JBQWdCO2dCQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DOztjQUVLLGFBQWEsR0FBd0IsRUFBRTtRQUU3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzdCLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOztrQkFDWCxTQUFTLEdBQUcsZ0JBQWdCO2dCQUNoQyxDQUFDLG1CQUFNLE1BQU0sSUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFDekMsQ0FBQyxDQUFDLE1BQU07O2tCQUNKLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7WUFDdkQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMseUJBQ0ssS0FBSyxJQUNSLFFBQVEsb0JBQU8sS0FBSyxDQUFDLFFBQVEsRUFBSyxhQUFhLEtBQy9DO1NBQ0g7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJy4vZW50aXR5LXN0YXRlJztcbmltcG9ydCB7IEVudGl0eUFjdGlvbiB9IGZyb20gJy4vZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsRW50aXR5U3RhdGU6IEVudGl0eVN0YXRlPGFueT4gPSB7IGVudGl0aWVzOiB7fSB9O1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciByZWR1Y2VyIGZvciByZXVzaW5nIHJlZHVjZXIgbG9naWMgZm9yIG11bHRpcGxlIGVudGl0aWVzXG4gKlxuICogVXRpbGl6ZXMgZW50aXR5SWQgbWV0YSBmaWVsZCB0byB0YXJnZXQgZW50aXR5IGJ5IGlkIGluIGFjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVJlZHVjZXI8VD4oXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcjogKHN0YXRlOiBULCBhY3Rpb246IEFjdGlvbikgPT4gVFxuKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGU6IEVudGl0eVN0YXRlPFQ+ID0gaW5pdGlhbEVudGl0eVN0YXRlLFxuICAgIGFjdGlvbjogRW50aXR5QWN0aW9uXG4gICk6IEVudGl0eVN0YXRlPFQ+ID0+IHtcbiAgICBsZXQgaWRzOiBzdHJpbmdbXTtcbiAgICBsZXQgcGFydGl0aW9uUGF5bG9hZCA9IGZhbHNlO1xuICAgIGlmIChcbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBlbnRpdHlUeXBlICYmXG4gICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBpZHMgPSBbXS5jb25jYXQoYWN0aW9uLm1ldGEuZW50aXR5SWQpO1xuXG4gICAgICAvLyByZW1vdmUgc2VsZWN0ZWQgZW50aXRpZXNcbiAgICAgIGlmIChhY3Rpb24ubWV0YS5lbnRpdHlSZW1vdmUpIHtcbiAgICAgICAgaWYgKGFjdGlvbi5tZXRhLmVudGl0eUlkID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGluaXRpYWxFbnRpdHlTdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IG5ld0VudGl0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmIChpZHMuaW5kZXhPZihjdXIpID4gLTEpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIHJldHVybiByZW1vdmVkID8geyBlbnRpdGllczogbmV3RW50aXRpZXMgfSA6IHN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcnRpdGlvblBheWxvYWQgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGFjdGlvbi5tZXRhLmVudGl0eUlkKSAmJiBBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eVVwZGF0ZXM6IHsgW2lkOiBzdHJpbmddOiBUIH0gPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGlkc1tpXTtcbiAgICAgIGNvbnN0IHN1YkFjdGlvbiA9IHBhcnRpdGlvblBheWxvYWRcbiAgICAgICAgPyB7IC4uLmFjdGlvbiwgcGF5bG9hZDogYWN0aW9uLnBheWxvYWRbaV0gfVxuICAgICAgICA6IGFjdGlvbjtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZS5lbnRpdGllc1tpZF0sIHN1YkFjdGlvbik7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgZW50aXR5VXBkYXRlc1tpZF0gPSBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZW50aXR5VXBkYXRlcykubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7IC4uLnN0YXRlLmVudGl0aWVzLCAuLi5lbnRpdHlVcGRhdGVzIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19