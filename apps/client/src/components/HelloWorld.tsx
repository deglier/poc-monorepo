import React from 'react'

import { Button, TextField } from '@ui/react'

const HelloWorld = () => (
  <>
    <h1>Hello There!</h1>
    <TextField type="text" placeholder="Something..." />
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
