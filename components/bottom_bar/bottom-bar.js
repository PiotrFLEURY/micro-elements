
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