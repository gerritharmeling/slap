 <template>
      <div class="container">
        <div stlye="margin-bottom: 30px;" class="row"> 
          <div class="col-md-4"> 
              <b-card
                    title="Cocktail Nr. 1"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    class="mb-2">
                    <b-button href="#" variant="primary">MIX</b-button>
                  </b-card>
            </div>
            <div class="col-md-4"> 
             <b-card
                    title="Cocktail Nr. 2"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    class="mb-2">
                    <b-button href="#" variant="primary">MIX</b-button>
                  </b-card>
            </div>

            <div class="col-md-4"> 
              <b-card
                  title="Cocktail Nr. 3"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    class="mb-2">
                    <b-button href="#" variant="primary">MIX</b-button>
                  </b-card>
            </div>
        </div>
        <div class="row"> 
          <div class="col-md-4"> 
              <b-card
                    title="Cocktail Nr. 1"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    class="mb-2">
                    <b-button href="#" variant="primary">MIX</b-button>
                  </b-card>
            </div>
            <div class="col-md-4"> 
             <b-card
                    title="Cocktail Nr. 2"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    class="mb-2">
                    <b-button href="#" variant="primary">MIX</b-button>
                  </b-card>
            </div>

            <div class="col-md-4"> 
              <b-card
                  title="Cocktail Nr. 3"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    class="mb-2">
                    <b-button href="#" variant="primary">MIX</b-button>
                  </b-card>
            </div>
        </div>
      </div> 
    </template>


   
    
<script>
  import axios from 'axios';
  export default {
    name: 'Users',
    data() {
      return {
        users: null,
      };
    },
    created: function() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          this.users = res.data;
        })
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>