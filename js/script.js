Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        emails: [],
        emailsNumber: 10,
    },
    methods: {
        getEmails(){
            for (let i=0; i<this.emailsNumber; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                });
            }
        },
    },
    created(){
        this.getEmails();
    }
});