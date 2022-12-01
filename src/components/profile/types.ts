// import { Screens } from 'src/navigation'

interface TypesPersonalData {
  title: string
  id: number
  navigate: string
  arrow: boolean
}

interface TypesDataLinks {
  id: number
  title: string
}

export const personalData: TypesPersonalData[] = [
  {
    title: 'Личные Данные',
    id: 0,
    navigate: '',
    arrow: true,
  },
  {
    title: 'Уведомления об акциях',
    id: 1,
    navigate: '',
    arrow: false,
  },
  {
    title: 'Город',
    id: 2,
    navigate: '',
    arrow: true,
  },
]

export const linksData: TypesDataLinks[] = [
  {
    id: 0,
    title: 'Почта',
  },
  {
    id: 1,
    title: 'Наш сайт',
  },
]

export const legalData: TypesDataLinks[] = [
  {
    id: 0,
    title: 'Условия программы лояльности',
  },
  {
    id: 1,
    title: 'Обработка персональных данных',
  },
]
