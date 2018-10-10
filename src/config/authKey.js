export const MenuKey = [{
    id: 11,
    label: "我的空间",
    children: [{
      id: 111,
      label: "信用债空间",
      href: '/StrategyList',
      children: [{
        id: 1112,
        href: '/StrategyList',
        label: "我的策略"
      }]
    }]
  },
  {
    id: 21,
    label: "策略管理",
    children: [{
      id: 211,
      label: "信用债策略",
      href: '/allStrategyList'
    }]
  },
  {
    id: 31,
    label: "权限分配",
    children: [{
        id: 311,
        label: "用户管理",
        href: '/account'
      },
      {
        id: 312,
        label: "角色管理",
        href: '/role'
      }
    ]
  },

  {
    id: 41,
    label: "会员管理",
    children: [{
      id: 411,
      label: "销售管理",
      href: '/Salesmanagement'
    }, {
      id: 412,
      label: "会员管理",
      href: '/Membermanagement'
    }]

  },
  {
    id: 51,
    label: "素材管理",
    children: [{
      id: 511,
      label: "语音管理",
      href: '/SoundManagement'
    }, {
      id: 512,
      label: "图片管理",
      href: '/ImageManagement'
    }]
  },
  {
    id: 61,
    label: "售后管理",
    children: [{
      id: 611,
      label: "产品配置",
      href: '/ProductConfig'
    }, {
      id: 612,
      label: "图文列表",
      href: '/ChartList'
    }]

  }
]

export const authLoaction = [{
    'allStrategyList': 211
  }, {
    'account': 311
  }, {
    'role': 312
  }, {
    'Salesmanagement': 411
  },
  {
    'Membermanagement': 412
  }
]
