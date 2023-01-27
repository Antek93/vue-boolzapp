console.log('Hi, I am java and I am working fine');

// ↓ → ← ↑ ✓ ✕ :utilities

const { createApp } = Vue;

createApp({
    data() {
        return {
            DateTime: null,
            searchedStuff: '',
            inputText: '',
            activeIndex: '',
            sofia : {
                name: 'Sofia',
                avatar: 'img/avatar_io.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare a pescare',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinese',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Nooo! Dove??',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, andiamo?',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "Vabe, tanto andiamo sempre alla stessa da 20 anni",
                            status: 'received'
                        }
                    ],
                },
            ] 
        }
    },
    methods: {

        changeIndex: function(index) {

            console.log('hai cliccato la scheda di', this.contacts[index].name)
            this.activeIndex = this.contacts[index]
            console.log('Indice Attivo', this.activeIndex)

        },
        addText: function(index) {
        
        console.log('Input text:', this.inputText);

        this.activeIndex.messages.push({
            date: '10/01/2020 15:50:00',
            message: this.inputText,
            status: 'sent'
        });

        setTimeout(() => {

            this.activeIndex.messages.push({
                date: '10/01/2020 15:50:00',
                message: 'Ok',
                status: 'receive'
            });

        }, 1000);

        this.inputText = '';

        },
        changeDisplay() {
            
            for(let i = 0; i < this.contacts.length; i++) {

                if ((this.contacts[i]['name'].toLowerCase().includes(this.searchedStuff.toLowerCase()))) {
               
                this.contacts[i].visible = true;
                console.log('includo')
              
            }   else {

                this.contacts[i].visible = false;
                console.log('non-includo')
            }
            }
        },

     }, mounted(){
        this.activeIndex = this.contacts[0];
        // console.log(dt.now().toLocalString(this.dt.DATETIME_SHORT_WITH_SECONDS))

        }

}).mount('#app');

