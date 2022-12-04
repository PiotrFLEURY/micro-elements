
class UserList extends MicroElement {

    users = [];

    fetchUsers() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                this.users = data.results;
                this.render();
            });
    }

    content = () => {
        if(this.users.length === 0) {
            this.fetchUsers();
            return `<p>Loading...</p>`;
        }
        return `
            <ul>
                ${this.users.map( user => {
                    return `
                        <li>
                            <random-user 
                                picture="${user.picture.medium}" 
                                userName="${user.name.first}" 
                                email="${user.email}">
                            </random-user>
                        </li>
                    `;
                })}
            </ul>
        `;
    }

    microAttributes = [];
     
}
defineElement('random-user-list', UserList);