import User from './User.js'

const Users = {
    data(){
        return {
            user: {
                id: '',
                username: '',
            },
            users: [],
        };
    },
    methods: {
        newUser(){
            const user = {
                id: Date.now(),
                username: faker.name.findName(),
            };
            this.users.unshift(user);
            this.$emit("user", this.users[0].username);
        },
    },
    mounted() {
        setInterval(this.newUser, 2000);
    },
    components: {
        User,
    },
    template: `
        <div class="card">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">CONNECTED USERS</h6>
                <div style="list-style-type: none;">
                    <User v-for="user in users" :user="user"><User/>
                    <li class="m-0 p-0">Me</li>
                </div>
            </div>
        </div>`,
};

export default Users;