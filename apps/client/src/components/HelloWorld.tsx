import React from 'react'

import { Button } from '@ui/react'

const HelloWorld = () => (
  <>
    <h1>Hello There!</h1>
    <Button
      width={{
        '@initial': 'full',
        '@bp1': 'auto',
      }}
    >
      Adicionar
    </Button>
  </>
)

export default HelloWorld
