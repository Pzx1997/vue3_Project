import type { RouteRecordNormalized } from 'vue-router';

export type StateType = {
    isCollapse: boolean;
    menuData: RouteRecordNormalized[];
}
