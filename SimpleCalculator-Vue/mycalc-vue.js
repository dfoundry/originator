var app = new Vue({
    el: '#calculator',
    data: {
        calcData: '',
   },
    methods: {
        addInput(value){
            this.calcData += value;
        },
        compute(){
            this.calcData = eval(this.calcData);
        },
        clearBox(){
            this.calcData = '';
        }
    }
});