export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary'
      }
    },
    {
      title: true,
      name: 'Cadastros',
    },
    {
      name: 'Clientes',
      url: '/customers',
      icon: 'icon-drop',
      children: [
        { 
          name: 'Listar',
          url: "/customers/"
        },
        { 
          name: 'Novo',
          url: "/customers/new"
        },
      ]
    },
    {
      name: 'Produtos',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Vendas',
    },
    {
      name: 'Pedidos',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle',
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Relatórios'
    },
    {
      name: 'Vendas',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
  ]
}
