const Notification = {
    props: ['username'],
    methods: {},
    template: `
        <div class="alert alert-primary text-center p-3" role="alert">
            <p class="m-0 p-0">{{username}} has just entered the room!</p>
        </div>`,
};

export default Notification;