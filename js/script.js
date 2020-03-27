new Vue({
    el: '#app',
    data: {
        title: 'Hello, World',
        changeTitle: '',
        newTitle: 'Hello',
        link: 'https://www.google.com',
        finishedLink: '<a href="http://www.facebook.com">Facebook</a>',
        counter: 0,
        x: 0,
        y: 0,
        counterTwo : 0,
        counterThree : 0,
        counterFour : 0,
        bgRed : false,
        color : "green"
    },
    computed : {
        output : function(){
            console.log('computed');
            return this.counterThree > 5 ? " Greater 5 " : " Smaller 5 ";
        }
    },
    watch: {
        /* I am watching this variable called counter inside vue js */
        counterThree : function(value){
            var reThis = this;
            setTimeout(function(){
                reThis.counterThree = 0;
            }, 2000);
        }
    },
    methods: {
        titleChange: function () {
            return this.title;
        },
        increaseCounter: function () {
            this.counter++;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        increaseCounterTwo : function(step){
            this.counterTwo += step;
        },
        alertMe : function(){
            alert('key is released');
        },
        resultThree : function(){
            console.log('method');
            return this.counterThree > 5 ? " Greater 5 " : " Smaller 5 ";
        }
    }
});
