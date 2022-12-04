
class User extends MicroElement {

    content = (attributes) => {
        let {picture, userName, email} = attributes;
        return `
            <img src="${picture}" alt="${userName}">
            <h2>${userName}</h2>
            <a href="mailto:${email}">${email}</a>
        `;
    }

    microAttributes = ['picture', 'userName', 'email'];
     
}
defineElement('random-user', User);