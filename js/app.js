
const LIST = [
    {
       id: 1,
       nome: 'Yoda',
       avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
     },
     {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
     },
     {
        id: 4,
        nome: 'Hansolo',
        avatar: 'images/hansolo.png'
     },
     {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
     },
     {
        id: 6,
        nome: 'Chewbaca',
        avatar: 'images/chewbacca.png'
     },
     {
        id: 7,
        nome: 'R2d2',
        avatar: 'images/r2d2.png'
     },
     {
        id: 8,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
     },
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'James',
        characters: LIST
    },
    methods:{
        like(name){
            alert(`O personagem ${name} recebeu um like`)
        }
    }
})
