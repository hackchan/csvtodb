'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'auths',
      [
        {
          id: 1,
          username: 'hackchan',
          password: '12345678',
          role: 'ssj'
        },
        {
          id: 2,
          username: 'montano',
          password: '12345678',
          role: 'ssj'
        },
        {
          id: 3,
          username: 'lilia',
          password: '12345678',
          role: 'ssj'
        },
        {
          id: 4,
          username: 'roberto',
          password: '12345678',
          role: 'ssj'
        },
        {
          id: 5,
          username: 'williams',
          password: '12345678',
          role: 'ssj'
        },
        {
          id: 6,
          username: 'leonador',
          password: '12345678',
          role: 'ssj'
        },

        {
          id: 7,
          username: 'luise',
          password: '12345678',
          role: 'ssj'
        },
        {
          id: 8,
          username: 'fabian',
          password: '12345678',
          role: 'ssj'
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Fabio',
          lastName: 'Rojas',
          phone: '3183895020',
          email: 'fabio.rojas@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 1
        },
        {
          id: 2,
          name: 'Hernando',
          lastName: 'Montano',
          phone: '3204463154',
          email: 'hernando.montano@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 2
        },
        {
          id: 3,
          name: 'lilia',
          lastName: 'barraza',
          phone: '3023432591',
          email: 'lilia.barraza@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 3
        },
        {
          id: 4,
          name: 'roberto',
          lastName: 'delahoz',
          phone: '3017888046',
          email: 'roberto.delahoz@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 4
        },
        {
          id: 5,
          name: 'williams',
          lastName: 'avila',
          phone: '3017888046',
          email: 'williams.avila@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 5
        },

        {
          id: 6,
          name: 'leonardo',
          lastName: 'celis',
          phone: '3017888046',
          email: 'leonardo.celis@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 6
        },

        {
          id: 7,
          name: 'Luis',
          lastName: 'celis',
          phone: '3017888046',
          email: 'luise.celis@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 7
        },
        {
          id: 8,
          name: 'fabian',
          lastName: 'velandia',
          phone: '3017888046',
          email: 'fabian.velandia@contraloria.gov.co',
          image: null,
          createdAt: '2022-01-09',
          auth_id: 8
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'satelitales',
      [
        {
          id: 1,
          name: 'Satelital Oriente',
          active: true,
          created_at: '2022-01-09'
        },
        {
          id: 2,
          name: 'Satelital Caribe',
          active: true,
          created_at: '2022-01-09'
        },
        {
          id: 3,
          name: 'Satelital Pacifico',
          active: true,
          created_at: '2022-01-09'
        },
        {
          id: 4,
          name: 'Satelital Eje Cafetero',
          active: true,
          created_at: '2022-01-09'
        },
        {
          id: 5,
          name: 'Satelital antioquia-choco',
          active: true,
          created_at: '2022-01-09'
        },
        {
          id: 6,
          name: 'Nivel central territorial',
          active: true,
          created_at: '2022-01-09'
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'departments',
      [
        {
          id: 1,
          name: 'Amazonas',
          latitude: -4.21528,
          longitude: -69.94056,
          active: true,
          satelital_id: 6,
          user_id: 6
        },
        {
          id: 2,
          name: 'Antioquia',
          latitude: 6.25184,
          longitude: -75.56359,
          active: true,
          satelital_id: 5,
          user_id: 8
        },
        {
          id: 3,
          name: 'Arauca',
          latitude: 7.08471,
          longitude: -70.75908,
          active: true,
          satelital_id: 1,
          user_id: 1
        },
        {
          id: 4,
          name: 'Atlántico',
          latitude: 10.96854,
          longitude: -74.78132,
          active: true,
          satelital_id: 2,
          user_id: 3
        },
        {
          id: 5,
          name: 'Bolívar',
          latitude: 10.39972,
          longitude: -75.51444,
          active: true,
          satelital_id: 2,
          user_id: 3
        },
        {
          id: 6,
          name: 'Boyacá',
          latitude: 5.53528,
          longitude: -73.36778,
          active: true,
          satelital_id: 1,
          user_id: 1
        },
        {
          id: 7,
          name: 'Caldas',
          latitude: 5.06889,
          longitude: -75.51738,
          active: true,
          satelital_id: 4,
          user_id: 1
        },
        {
          id: 8,
          name: 'Caquetá',
          latitude: 1.61438,
          longitude: -75.60623,
          active: true,
          satelital_id: 3,
          user_id: 5
        },
        {
          id: 9,
          name: 'Casanare',
          latitude: 5.33775,
          longitude: -72.39586,
          active: true,
          satelital_id: 1,
          user_id: 1
        },
        {
          id: 10,
          name: 'Cauca',
          latitude: 2.43823,
          longitude: -76.61316,
          active: true,
          satelital_id: 3,
          user_id: 5
        },
        {
          id: 11,
          name: 'Cesar',
          latitude: 10.46314,
          longitude: -73.25322,
          active: true,
          satelital_id: 2,
          user_id: 3
        },

        {
          id: 12,
          name: 'Choco',
          latitude: 5.69188,
          longitude: -76.65835,
          active: true,
          satelital_id: 5,
          user_id: 8
        },
        {
          id: 13,
          name: 'Córdoba',
          latitude: 8.74798,
          longitude: -75.88143,
          active: true,
          satelital_id: 2,
          user_id: 4
        },
        {
          id: 14,
          name: 'Cundinamarca',
          latitude: 4.60971,
          longitude: -74.08175,
          active: true,
          satelital_id: 6,
          user_id: 6
        },
        {
          id: 15,
          name: 'Guainía',
          latitude: 2.92409,
          longitude: -68.93526,
          active: true,
          satelital_id: 6,
          user_id: 7
        },
        {
          id: 16,
          name: 'Guaviare',
          latitude: 2.57286,
          longitude: -72.64591,
          active: true,
          satelital_id: 6,
          user_id: 7
        },
        {
          id: 17,
          name: 'Huila',
          latitude: 2.9273,
          longitude: -75.28189,
          active: true,
          satelital_id: 4,
          user_id: 1
        },
        {
          id: 18,
          name: 'La Guajira',
          latitude: 11.54444,
          longitude: -72.90722,
          active: true,
          satelital_id: 2,
          user_id: 4
        },
        {
          id: 19,
          name: 'Magdalena',
          latitude: 11.24079,
          longitude: -74.19904,
          active: true,
          satelital_id: 2,
          user_id: 4
        },
        {
          id: 20,
          name: 'Meta',
          latitude: 4.1429,
          longitude: -73.62664,
          active: true,
          satelital_id: 6,
          user_id: 6
        },
        {
          id: 21,
          name: 'Nariño',
          latitude: 1.21361,
          longitude: -77.28111,
          active: true,
          satelital_id: 3,
          user_id: 5
        },
        {
          id: 22,
          name: 'Norte de Santander',
          latitude: 7.89391,
          longitude: -72.50782,
          active: true,
          satelital_id: 1,
          user_id: 2
        },
        {
          id: 23,
          name: 'Putumayo',
          latitude: 1.15284,
          longitude: -76.65208,
          active: true,
          satelital_id: 3,
          user_id: 5
        },
        {
          id: 24,
          name: 'Quindío',
          latitude: 4.53389,
          longitude: -75.68111,
          active: true,
          satelital_id: 4,
          user_id: 1
        },
        {
          id: 25,
          name: 'Risaralda',
          latitude: 4.81333,
          longitude: -75.69611,
          active: true,
          satelital_id: 4,
          user_id: 1
        },
        {
          id: 26,
          name: 'San Andrés',
          latitude: 12.58317,
          longitude: -81.70636,
          active: true,
          satelital_id: 2,
          user_id: 3
        },
        {
          id: 27,
          name: 'Santander',
          latitude: 7.12539,
          longitude: -73.1198,
          active: true,
          satelital_id: 1,
          user_id: 2
        },

        {
          id: 28,
          name: 'Sucre',
          latitude: 9.30472,
          longitude: -75.39778,
          active: true,
          satelital_id: 2,
          user_id: 4
        },
        {
          id: 29,
          name: 'Tolima',
          latitude: 4.43889,
          longitude: -75.23222,
          active: true,
          satelital_id: 4,
          user_id: 5
        },
        {
          id: 30,
          name: 'Valle del Cauca',
          latitude: 3.43722,
          longitude: -76.5225,
          active: true,
          satelital_id: 3,
          user_id: 5
        },
        {
          id: 31,
          name: 'Vaupés',
          latitude: 0.97239,
          longitude: -70.40635,
          active: true,
          satelital_id: 6,
          user_id: 7
        },
        {
          id: 32,
          name: 'Vichada',
          latitude: 6.18903,
          longitude: -67.48588,
          active: true,
          satelital_id: 6,
          user_id: 7
        }
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'tipoentidades',
      [
        {
          id: 1,
          name: 'Alcaldia'
        },
        {
          id: 2,
          name: 'Gobernacion'
        }
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'entidades',
      [
        {
          id: 1,
          name: 'Alcaldia',
          db: '',
          tipoEntidad: 1,
          departId: 6
        },
        {
          id: 2,
          name: 'Gobernacion'
        }
      ],
      {}
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Department', null, {})
    await queryInterface.bulkDelete('Satelital', null, {})
    await queryInterface.bulkDelete('User', null, {})
    await queryInterface.bulkDelete('Auth', null, {})
  }
}
