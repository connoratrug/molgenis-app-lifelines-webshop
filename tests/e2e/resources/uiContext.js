module.exports = {
  roles: [
    'ROLE_USER',
    'ROLE_lifelines_SHOPPER',
    'ROLE_lifelines_MANAGER'
  ],
  email: 'll_admin@molgenis.org',
  username: 'll_admin',
  logoTopMaxHeight: 150,
  navBarLogo: '/logo/ll-logo.png',
  menu: {
    type: 'menu',
    id: 'main',
    label: 'Home',
    items: [
      {
        type: 'plugin',
        id: 'home',
        label: 'Home'
      },
      {
        type: 'menu',
        id: 'importdata',
        label: 'Import data',
        items: [
          {
            type: 'plugin',
            id: 'one-click-importer',
            label: 'Quick data import'
          },
          {
            type: 'plugin',
            id: 'importwizard',
            label: 'Advanced data import'
          }
        ]
      },
      {
        type: 'plugin',
        id: 'navigator',
        label: 'Navigator'
      },
      {
        type: 'plugin',
        id: 'dataexplorer',
        label: 'Data Explorer'
      },
      {
        type: 'menu',
        id: 'dataintegration',
        label: 'Data Integration',
        items: [
          {
            type: 'plugin',
            id: 'metadata-manager',
            label: 'Metadata Manager'
          },
          {
            type: 'plugin',
            id: 'mappingservice',
            label: 'Mapping Service'
          },
          {
            type: 'plugin',
            id: 'sorta',
            label: 'SORTA'
          },
          {
            type: 'plugin',
            id: 'tagwizard',
            label: 'Tag Wizard'
          }
        ]
      },
      {
        type: 'menu',
        id: 'plugins',
        label: 'Plugins',
        items: [
          {
            type: 'plugin',
            id: 'searchAll',
            label: 'Search all data'
          },
          {
            type: 'plugin',
            id: 'swagger',
            label: 'API documentation'
          },
          {
            type: 'plugin',
            id: 'appmanager',
            label: 'App manager'
          },
          {
            type: 'plugin',
            id: 'feedback',
            label: 'Feedback'
          },
          {
            type: 'plugin',
            id: 'jobs',
            label: 'Job overview'
          },
          {
            type: 'plugin',
            id: 'questionnaires',
            label: 'Questionnaires'
          },
          {
            type: 'plugin',
            id: 'scripts',
            label: 'Scripts'
          }
        ]
      },
      {
        type: 'menu',
        id: 'admin',
        label: 'Admin',
        items: [
          {
            type: 'plugin',
            id: 'logmanager',
            label: 'Log manager'
          },
          {
            type: 'plugin',
            id: 'menumanager',
            label: 'Menu Manager'
          },
          {
            type: 'plugin',
            id: 'permissionmanager',
            label: 'Permission Manager'
          },
          {
            type: 'plugin',
            id: 'scheduledjobs',
            label: 'Scheduled Jobs'
          },
          {
            type: 'plugin',
            id: 'settings',
            label: 'Settings'
          },
          {
            type: 'plugin',
            id: 'thememanager',
            label: 'Theme Manager'
          },
          {
            type: 'plugin',
            id: 'usermanager',
            label: 'User Manager'
          },
          {
            type: 'plugin',
            id: 'security-ui',
            label: 'Security Manager'
          }
        ]
      },
      {
        type: 'plugin',
        id: 'useraccount',
        label: 'Account'
      }
    ]
  },
  loginHref: '/login',
  helpLink: '{label: \'Help\', href: \'https://molgenis.gitbooks.io/molgenis/content/\'}',
  authenticated: true,
  showCookieWall: false,
  version: '8.2.0-SNAPSHOT-PR-8570-28',
  buildDate: '2019-08-20 13:57 UTC'
}
