# asterisk-lib
A Bit based component library built from scratch by me :D

## installing components
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