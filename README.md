# micro frond end with Flutter

This project is a Proof Of Concept of micro front end with Flutter part

## Getting Started

First run the Flutter bottom_bar app on web in release mode

```bash
cd bottom_bar
flutter run -d chrome --release --web-port=3000
```

Then start a live-server in the root folder

```bash
live-server
``` 

## How it works

This project uses custom HTML element definitions.

### Base layer

A first abstraction layer is defined in `micro/micro-element.js`

### Define custom element

To define a new micro element, you need to extend the `MicroElement`.

```js
class MicroBottomBar extends MicroElement {
    content = (attributes) => {
        let { width, height } = attributes;
        return `
    <style>
        #app-container {
          height: ${height};
          width: ${width};
          margin: 0 auto;
          border: none;
          referer-policy: same-origin;
        }
      </style>
    <iframe 
        id="app-container"
        src="http://localhost:3000/">
    </iframe>
        `;
    }

    microAttributes = [ 'width', 'height' ];
}

defineElement('micro-bottom-bar', MicroBottomBar);
```

### Use custom element

```html
<html>
    <head>
        <!-- header content -->
    </head>
    <body>

        <!-- ... -->
        
        <!-- This is a custom HTML element containing a Flutter Web app -->
        <micro-bottom-bar width="100%" height="100px"></micro-bottom-bar>

        <!-- ... -->

    </body>
</html>
```

### Communication between micro elements

__TODO - This part has not been yet etablished.__

> Requirements:
> - Being able to listen events from a micro element
> - Being able to send events to a micro element