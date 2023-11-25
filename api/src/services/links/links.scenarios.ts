import type { Prisma, Link } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LinkCreateArgs>({
  link: {
    one: {
      data: {
        platform: 'GITHUB',
        path: 'String',
        User: {
          create: {
            email: 'String4009382',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        platform: 'GITHUB',
        path: 'String',
        User: {
          create: {
            email: 'String2023104',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Link, 'link'>
