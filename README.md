# Getting started

## Install

```sh
$ npm install tu-nguyen-clone-deep
```

## Usage Example

```javascript
import clone from 'tu-nguyen-clone-deep'

const currentObject = {
  keyName: 'value',
}

const newObject = clone(currentObject)
newObject.keyName = 'new value'

console.log(currentObject.keyName) // 'value'
```

## Author:
khanh2kjr