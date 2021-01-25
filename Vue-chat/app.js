import Chat from "./app/Components/Chat.js";
import Notification from "./app/Components/Notification.js";

const app = Vue.createApp({
    data(){
        return{
            username: '',
        };
    },
    methods: {
        newConnection(username){
            this.username = username;
        },
    },
    components: {
        Notification,
        Chat,
    },
    template: `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-9 mt-5" id="app">
                    <div class="text-center mb-4">
                      <h1>Vue chat</h1>
                    </div>
                    <div class="container mt-4">
                        <Notification v-if='username' :username="username"></Notification>
                        <Chat @username='newConnection'><Chat/>
                    </div>
                </div>
        </div>`,
})

app.mount("#app");
