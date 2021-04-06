<p align="center">
  <a href="https://alphacomponents.dev">
    <img src="https://alphacomponents.dev/assets/logo-150.svg">
  </a>
</p>

<div align="center">

<h1 align="center">Alpha Components</h1>

[React](https://reactjs.org) components for faster and easier web development. Quickly bootstrap your application with free components that are nice to look at, easy to use, and guaranteed to make users and developers happy. Read the [docs](https://alphacomponents.dev).

[![Netlify Status](https://api.netlify.com/api/v1/badges/cf2bf000-673e-49eb-849b-ae59cad8d309/deploy-status)](https://app.netlify.com/sites/alpha-components/deploys)
[![build workflow](https://github.com/areknow/alpha-components/actions/workflows/build.yml/badge.svg)](https://github.com/areknow/alpha-components/actions/workflows/build.yml)
[![lint workflow](https://github.com/areknow/alpha-components/actions/workflows/lint.yml/badge.svg)](https://github.com/areknow/alpha-components/actions/workflows/lint.yml)
[![test workflow](https://github.com/areknow/alpha-components/actions/workflows/test.yml/badge.svg)](https://github.com/areknow/alpha-components/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/dw/@miniml/alpha-components-react)](https://www.npmjs.com/package/@miniml/alpha-components-react)
[![npm](https://img.shields.io/npm/v/@miniml/alpha-components-react)](https://www.npmjs.com/package/@miniml/alpha-components-react)

</div>

## Getting started

### 📦 Installation

Install the alpha components via npm. We take care of injecting the needed styles.

```shell
$ npm install --save @miniml/alpha-components-react
$ yarn add @miniml/alpha-components-react
```

### 📝 Font

Use whatever font makes you happy. We think [Jost](https://indestructibletype.com/Jost.html) looks very nice with these components.

```css
@import url('https://indestructibletype.com/fonts/Jost.css');

body {
  font-family: 'Jost', sans-serif;
}
```

### 👩‍💻 Usage

Alpha components work without any additional setup, and don't pollute the global scope. [See more](https://alphacomponents.dev/button).

```jsx
import { Root } from '@miniml/alpha-components-react/root';
import { Button } from '@miniml/alpha-components-react/button';

function App() {
  return (
    <Root>
      <Button type="primary">I think we click</Button>
    </Root>
  );
}
```

## Demo

Want to play around with the components without setting up a local app? Take a look at a [CodeSandbox](https://codesandbox.io/s/alpha-components-8jy4q) thats ready to go with some Alpha Components.
