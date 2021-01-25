const Message = {
    data(){
        return {
            message: {
                id: Date.now(),
                username: 'Thomas',
                message: '',
                date: '',
            },
            messages: [],
        }
    },
    methods: {
        Message(){
            const message = {
                id: Date.now(),
                username: 'Thomas',
                message: this.message.message,
                date: new Date(Date.now()).toLocaleTimeString(),
            };
            this.message.id = Date.now();
            this.message.username = "";
            this.message.message = "";
            this.message.date = "";
            this.messages.push(message);
        },
    },
    template: `
        <div class="card">
            <div class="card-body">
                <div class="alert alert-secondary" role="alert">
                    <h6 class="card-subtitle mb-2 text-muted m-0 p-0">
                        <p class="text-right m-0 p-0">Thomas</p>
                        <small class="text-right m-0 p-0">10.21.33</small>
                    </h6>
                    <p class="m-0 p-0">Hello everyone!</p>
                </div>
                <div v-for='message in messages'class="alert alert-success" role="alert">
                    <h6 class="card-subtitle mb-2 text-muted m-0 p-0">
                        <p class="text-right m-0 p-0">Me</p>
                        <small class="text-right m-0 p-0">{{message.date}}</small>
                    </h6>
                    <p class="text-right m-0 p-0">{{message.message}}</p>
                </div>
                <div> 
                    <form @submit.prevent='Message' class="form-inline pt-5">
                        <input v-model="message.message" class="form-control" placeholder="Write your message here"/>
                    </form>
                </div>
            </div>
        </div>`,
};

export default Message;