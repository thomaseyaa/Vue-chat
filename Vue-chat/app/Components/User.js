const User = {
    props: ['user'],
    methods: {},
    template: `
        <div>
            <li class="m-0 p-0">{{user.username}}</li>
        </div>`,
};

export default User;