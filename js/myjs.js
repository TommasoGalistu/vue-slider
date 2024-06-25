const {createApp} = Vue;

createApp({
    data(){
        return {
            slides: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
            posIndex: 0,
            inizioAutomatico: '',
            inizioInverso: '',

        }
    },
    methods: {
        avanti(){
            this.posIndex++;
            if(this.posIndex > this.slides.length - 1){
                this.posIndex = 0;
            }
        },
        indietro(){
            this.posIndex--;
            if(this.posIndex < 0){
                this.posIndex = this.slides.length - 1;
            }
        },
        cambiaImmagine(index){
            this.stop()
            this.posIndex = index;
        },
        startAuto(){
            this.stop()
            this.inizioAutomatico = setInterval(this.avanti, 2000)
        },
        stop(){
            clearInterval(this.inizioAutomatico)
            clearInterval(this.inizioInverso)
        },
        inverti(){
            this.stop()
            this.inizioInverso = setInterval(this.indietro, 2000)
        }
    },
    mounted(){
        
    }
    
}
    
).mount('#container');

