import React from 'react'

import { Button, TextField, Label, FormControl } from '@ui/react'

const HelloWorld = () => (
  <>
    <h1>Hello There client!</h1>
    <FormControl direction="vertical" align="start" space={8}>
      <Label htmlFor="name">Seu nome</Label>
      <TextField placeholder="Jhon Doe" id="name" />
    </FormControl>
    <Button
      variant="highligh02"
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
