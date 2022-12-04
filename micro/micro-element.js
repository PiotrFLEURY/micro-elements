class MicroElement extends HTMLElement {

    microAttributes = [];

    connectedCallback() {
        this.render();
    }
    getMicroAttributes() {
        let attributes = {};
        for (let attr of this.microAttributes) {
            attributes[attr] = this.getAttribute(attr);
        }
        return attributes;
    }
    render() {
        const attributes = this.getMicroAttributes();
        this.innerHTML = this.content(attributes);
    }
    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }
    disconnectedCallback() {
        console.log('user disconnected');
    }
    
}

defineElement = (tagName, classType) => {
    window.customElements.define(tagName, classType);
}
