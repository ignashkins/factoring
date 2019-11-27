Vue.config.devtools = true;
Vue.use(VueTheMask);
Vue.use(numeral);

let app = new Vue({
    el: '#app',
    data: {
        percent: null,
        price: null,
        compare: 5000000,
        incPrice: 0,
        incPercent: 0,
        divPrice: 0,
        divPercent: 0,
    },
    methods: {
        changePrice: function (e) {
            this.percent = this.percent <= 100 ? this.percent : 100;
            this.price = (this.compare * this.percent / 100).toFixed(2);
        },
        changePercent: function (e) {
            this.price = this.price <= this.compare ? this.price : this.compare;
            this.percent = (this.price / this.compare * 100).toFixed(2);
        },
        upPercent: function (e) {
            let percent = this.percent === null || this.percent === '' ? 0 : parseFloat(this.percent);
            if (percent < 100) {
                this.incPercent++;
                this.percent = (percent + 0.01 * Math.pow(10, this.divPercent)).toFixed(2);
                this.divPercent = Math.floor(this.incPercent / 10);

                if (this.incPercent % 10 === 0) {
                    this.incPercent++;
                }
            } else {
                this.percent = 100+'.00';
            }
        },
        upPrice: function () {
            let price = this.price === null || this.price === '' ? 0 : parseFloat(this.price);
            if (price < this.compare) {
                this.incPrice++;
                this.price = (price + 0.01 * Math.pow(10, this.divPrice)).toFixed(2);
                this.divPrice = Math.floor(this.incPrice / 10);
                if (this.incPrice % 10 === 0) {
                    this.incPrice++;
                }
            } else {
                this.price = this.compare+'.00';
            }
        }
    }
});