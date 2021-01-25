import Message from './Message.js'
import Users from './Users.js'

const Chat = {
    data(){
        return{
            username: '',
        };
    },
    methods: {
        newUser(username){
            this.username = username;
            this.$emit("username", this.username);
        },
    },
    components: {
        Message,
        Users,
    },
    template: `    
        <div class="row">
            <div class="col-3">
                <Users @user='newUser'><Users/>
            </div>
            <div class="col-9">
                <Message></Message>
            </div>
        </div>`,
};

export default Chat;