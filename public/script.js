var PRICE=9.99;
new Vue({
    el:'#app',
    data:{
        total:0,
        items:[],
        cart:[],
        search:'',
        loading:true
    },
    methods:{
        addtoCart:function(index){
            var found=false;
            this.total+=9.99;
            
            item=this.items[index];
            for(var i=0;i<this.cart.length;i++){
                if(this.cart[i].id==item.id){
                    console.log("yes");
                    this.cart[i].qty++;
                    found=true;
                }sss
            }
            if(!found){
            this.cart.push({
                id:item.id,
                title:item.title,
                price:PRICE,
                qty:1
            });
        }
        },
        dec:function(item){
            item.qty--;
            this.total-=PRICE;
            if(item.qty==0){
                for(var i=0;i<this.cart.length;i++){
                    if(item.id==this.cart[i].id)
                    this.cart.splice(i,1);
                }
            }
        },
        
        inc:function(item){
            item.qty++;
            this.total+=PRICE;
        },
        onSubmit:function(){
            this.loading=true;
            this
            .$http
            .get('/search/'.concat(this.search))
            .then(res=>{
                this.items=res.body;
                
                this.loading=false;
            })  
        }
    },
    filters:{
        currency:function(price){
            return '$'.concat(price.toFixed(2));
        }
    }
});