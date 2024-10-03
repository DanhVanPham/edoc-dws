import {
    IconArchive, IconBoxArrowRight, IconCurrency, IconFeather,
    IconFile, IconGear, IconHelp, IconHome, IconPerson,
    IconStack, IconSuitcase, IconTask
} from '../../../components/icons'

export const menuItems = [
    {
        title: 'Dashboards',
        items: [
            { icon: <IconHome />, label: 'Home', link: '/' },
            { icon: <IconTask />, label: 'To-do List', link: '/' },
            { icon: <IconFile />, label: 'Approve Docs', link: '/' },
        ],
        isSingle: true,
    },
    {
        title: 'Other',
        items: [
            {
                icon: <IconStack />,
                label: 'Finance',
                isCollapsible: true,
                collapseId: 'bst-board-finance',
                subItems: [
                    { icon: <IconArchive />, label: 'Page', link: '/finance' },
                    { icon: <IconArchive />, label: 'Create', link: '/finance-create' },
                    { icon: <IconArchive />, label: 'Schedule', link: '/finance-schedule' },
                ],
            },
            { icon: <IconCurrency />, label: 'Accounting' },
            { icon: <IconPerson />, label: 'HR' },
            { icon: <IconSuitcase />, label: 'TA' },
            { icon: <IconPerson />, label: 'Admin' },
            { icon: <IconFeather />, label: 'Report' },
        ],
        isCollapsible: true,
    },
    {
        title: 'Settings',
        items: [
            { icon: <IconGear />, label: 'System' },
            { icon: <IconHelp />, label: 'Help', link: '/search-result' },
            { icon: <IconBoxArrowRight />, label: 'Login', link: '/login' },
        ],
        isSingle: false,
    },
];
