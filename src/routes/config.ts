export interface IFMenuBase {
    key: string;
    title: string;
    icon?: string;
    component?: string;
    query?: string;
    auth?: string;
    route?: string;
    login?: string;
}

export interface IFMenu extends IFMenuBase {
    subs?: IFMenuBase[];
}

const menus: {
    menus: IFMenu[];
    others: IFMenu[] | [];
    [index: string]: any;
} = {
    menus: [
        // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        { key: '/app/dashboard/index', title: 'Current', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/table',
            title: 'Tables',
            icon: 'copy',
            subs: [
                { key: '/app/table/selectCase', title: 'Select', component: 'SelectCase'},
                { key: '/app/table/basicTable', title: 'Case History', component: 'BasicTable'},
                { key: '/app/table/basicTable', title: 'Suite History', component: 'BasicTable'},
                { key: '/app/table/basicTable', title: 'Select', component: 'BasicTable'},
            ] 
        },
        {
            key: '/app/setting',
            title: 'Setting',
            icon: 'copy',
            subs: [
                
            ] 
        },
    ],
    others: [
        // {}
    ], // 非菜单相关路由
};

export default menus;
