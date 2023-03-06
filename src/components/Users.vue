 <template>
  <div class="container" style="margin-bottom: 70px">
    <div style="display: none" id="loader" class="row">
      <div class="offset-md-3 col-md-6">
        <b-card
          title="Currently mixing"
          img-src="load.gif"
          img-top1
          class="mb-2"
        >
        </b-card>
      </div>
    </div>

    <div id="contentcontainer">
      <div style="margin-bottom: 50px">
        <div class="row">
          <div class="col-md-3 col-6">
            <b-card
              title="Korn Cola"
              img-src="cocktail_acapulco-1.png"
              img-alt="Image"
               v-on:click="mix('1')"
               style="cursor: pointer"
              class="mb-1"
            >
            </b-card>
          </div>
          <div class="col-md-3 col-6">
            <b-card
              id="1"
              title="Korn Diesel"
              img-src="cocktail_atomic_cat-1.png"
              img-alt="Image"
              img-top
               v-on:click="mix('3')"
               style="cursor: pointer"
              class="mb-2"
            >
            </b-card>
          </div>

          <div class="col-md-3 col-6">
            <b-card
              title="Vodka Lemon"
              img-src="cocktail_cuba_libre-1.png"
              img-alt="Image"
              img-top
               v-on:click="mix('4')"
               style="cursor: pointer"
              class="mb-2"
            >
            </b-card>
          </div>
          <div class="col-md-3 col-6">
            <b-card
              title="Wiesel"
              img-src="cocktail_mojito-1.png"
              img-alt="Image"
              img-top
               v-on:click="mix('2')"
               style="cursor: pointer"
              class="mb-2"
            >
            </b-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-6">
          <b-card
            title="Vodka Eistee"
            img-src="cocktail_pina_colada-1.png"
            img-alt="Image"
            img-top
             v-on:click="mix('6')"
             style="cursor: pointer"
            class="mb-2"
          >
          </b-card>
        </div>
        <div class="col-md-3 col-6">
          <b-card
            title="Vodka Cola"
            img-src="cocktail_poker_face-1.png"
            img-alt="Image"
            img-top
             v-on:click="mix('5')"
             style="cursor: pointer"
            class="mb-2"
          >
          </b-card>
        </div>

        <div class="col-md-3 col-6">
          <b-card
            title="Vodka Fanta"
            img-src="cocktail_tequila_sunrise-1.png"
            img-alt="Image"
            img-top
             v-on:click="mix('8')"
             style="cursor: pointer"
            class="mb-2"
          >
          </b-card>
        </div>
        <div class="col-md-3 col-6">
          <b-card
            title="Korn Eistee"
            img-src="cocktail_virgin_mojito-1.png"
            img-alt="Image"
            img-top
             v-on:click="mix('7')"
             style="cursor: pointer"
            class="mb-2"
          >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
  },
  methods: {
    async mix(title) {
      console.log(title);

      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch("getraenk.php?id=" + title, requestOptions)
        .then(async (response) => {
          const data = await response;

          console.log("ok", data);
        });
          this.countLoader(20);
    },
    countLoader(time) {
      //time is in seconds

      document.getElementById("contentcontainer").style.display = "none";
      document.getElementById("loader").style.display = "block";

      setTimeout(function () {
        document.getElementById("contentcontainer").style.display = "block";
        document.getElementById("loader").style.display = "none";
      }, time * 1000);
    },
  },
};
</script>
<style>
h3 {
  margin-bottom: 5%;
}
</style>