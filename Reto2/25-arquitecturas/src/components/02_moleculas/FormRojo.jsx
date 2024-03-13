import React from 'react'
import { Container } from '../01_atomos/Container'
import Input from '../01_atomos/Input'
import Button from '../01_atomos/Button'

export const FormRojo = () => {
  return (
    <div>
        <Container>
            <Input />
            <Button color='red' />
        </Container>
    </div>
  )
}
