export interface StMenuItam {
  displayName: string;
  icon: string;
  link: { path: string };
}

export const menuItems: StMenuItam[] = [
  {
    displayName: 'Запись',
    icon: 'today',
    link: { path: '/record' },
  },
  {
    displayName: 'Проекты',
    icon: 'draw',
    link: { path: '/projects' },
  },
  {
    displayName: 'Профиль',
    icon: 'person',
    link: { path: '/profile' },
  },
  {
    displayName: 'Филиалы',
    icon: 'location_on',
    link: { path: '/affiliates' },
  },
];
