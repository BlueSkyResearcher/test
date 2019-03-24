window.onload = function () {
var thirdPartyURL = 'https://api.punkapi.com/v2/beers?malt=yes';
new Vue({
  el: '#app',
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
       { text: 'first brewed', value: 'first_brewed' }
      ],
      product: []
    }
  }
  ,
  created: function () {
    this.get_Data();
  },
  methods: {
    get_Data: function () {
    var self = this;
    $.get( thirdPartyURL, function( data ) {
        self.product = data;
        console.log(data);
    });
    }
  }
  
  
  
})
}
