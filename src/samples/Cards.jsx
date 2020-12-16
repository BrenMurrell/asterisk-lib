import React, {useState} from 'react'
import { Card, Button, Container } from '../components/All'

const CardsSample = () => {
  const [columnCount, setColumnCount] = useState(3)
  const [isColumn, setIsColumn] = useState(false)
  
  const toggleDirection = () => {
    setIsColumn(!isColumn)  
  }

  return(
    <Container column={isColumn} columnCount={columnCount}>
      <Card headerText="A normal (left) card">
        <p>Click button for 2 columns</p>
        <Button variant={'warning'} buttonText="Click me!" click={() => setColumnCount(2)} />
      </Card>
      <Card headerText="A center aligned card" alignment="center">
        <p>Click button for 3 columns</p>
        <Button variant={'success'} buttonText="Click me!" click={() => setColumnCount(3)} />
      </Card>
      <Card headerText="A right aligned card" alignment="right">
        <p>Click button for 4 columns</p>
        <Button buttonText="Click me!" click={() => setColumnCount(4)} />
      </Card>
      <Card headerText="A normal (left) card">
        <p>Click button for 5 columns</p>
        <Button buttonText="Click me!" click={() => setColumnCount(5)} />
      </Card>
      <Card headerText="A center aligned card" alignment="center">
        <p>Click button for 6 columns</p>
        <Button buttonText="Click me!" click={() => setColumnCount(6)} />
      </Card>
      <Card headerText="A right aligned card" alignment="right">
        <p>This button toggles flex direction</p>
        <Button buttonText="Click me!" click={() => toggleDirection()} />
      </Card>
    </Container>
  )
}

export default CardsSample
