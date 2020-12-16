# asterisk-lib
A Bit based component library built from scratch by me :D

## Install this repo
Use your package manager of choice to fire up this repo and see what's under the hood
```
yarn
```

or

```
npm i
```

Or jump out to the [compiled components on bit](https://bit.dev/brenmurrell/asterisk-library/)

## Contributing
The project is definitely open to suggestions, so feel free to create an issue or submit some code. The following versioning system will be used when new components, features and bug fixes are merged.

Once code has been completed, run the following commands on `main`:

``` sh
bit add src/components/*
```
This adds the new components to the bit repo

``` sh
bit tag --all 0.0.1
```
Creates a repo tag. The version number should be the next logical version number after current, following [semver](https://semver.org/) principles.

To summarise how _we_ use it: 

`0.0.0` == `major.minor.patch`

- Major is a breaking change that would affect existing installs of Asterisk Lib in a negative way (i.e. some components in projects are likely to require significant rework to continue working)
- Minor version should be incremented when new components are added
- Patch version should be incremented when making bug-fixing (but non-breaking) changes to existing components, e.g. adding new props.

## Installing components in your own projects
As simple as a yarn install! The following installs the _whole_ library. You can also install individual components. 

### npm

All components:
``` npm
npm i @bit/brenmurrell.asterisk-library.all
```

Add the button component only:
``` npm
npm i @bit/brenmurrell.asterisk-library.button
```

A full list of available components can be found in the Asterisk Library [bit collection](https://bit.dev/brenmurrell/asterisk-library/)

### yarn
Installing the full collection:
```
yarn add @bit/brenmurrell.asterisk-library.all
```

Installing a single component:
```
yarn add @bit/brenmurrell.asterisk-library.button
```

## using components:

If you've installed the full collection, you can import all of the required components with an import:

``` javascript
import { Card, Button, Container } from '@bit/brenmurrell.asterisk-library.all'
```

If you've installed individual components, you can import them on thier own:
``` javascript
import Button from '@bit/brenmurrell.asterisk-library.button'
import Card from '@bit/brenmurrell.asterisk-library.card'
```

Then simply go ahead and use them. I built a sample layout using cards, buttons and containers that looked a bit like this:

``` javascript
import React, {useState} from 'react'
import { Card, Button, Container } from '../components/All'
import cn from 'classnames'

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
```

(The latest version of this example exists in `/src/samples/Cards.jsx`)