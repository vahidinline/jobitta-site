import { Module, VuexModule, Action } from 'vuex-module-decorators'

@Module
export default class Nav extends VuexModule {
  items = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Experts',
      to: '/experts'
    },
    {
      name: 'FAQs',
      to: '/faq'
    },
    {
      name: 'About',
      to: '/about'
    },
    {
      name: 'Contact Us',
      to: '/contactus'
    }
  ]
  drawer = false
}
