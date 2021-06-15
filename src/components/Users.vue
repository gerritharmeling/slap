 <template>
  <div class="container" style="margin-bottom: 70px">
    <div style="display: none" id="loader" class="row">
      <div class="offset-md-3 col-md-6">
        <b-card
          title="Currently mixing"
          img-src="load.gif"
          img-top
          v-on:click="mix('')"
          class="mb-2"
        >
        </b-card>
      </div>
    </div>

    <div id="contentcontainer">
      <div style="margin-bottom: 50px">
        <div class="row">
          <div class="col-md-3">
            <b-card
              title="Acapulco"
              img-src="cocktail_acapulco-1.png"
              img-alt="Image"
              v-on:click="mix('awdawd')"
              class="mb-2"
            >
            </b-card>
          </div>
          <div class="col-md-3">
            <b-card
              id="1"
              title="Atomic Cat"
              img-src="cocktail_atomic_cat-1.png"
              img-alt="Image"
              img-top
              v-on:click="mix('awdawd')"
              class="mb-2"
            >
            </b-card>
          </div>

          <div class="col-md-3">
            <b-card
              title="Cuba Libre"
              img-src="cocktail_cuba_libre-1.png"
              img-alt="Image"
              img-top
              class="mb-2"
            >
            </b-card>
          </div>
          <div class="col-md-3">
            <b-card
              title="Mojito"
              img-src="cocktail_mojito-1.png"
              img-alt="Image"
              img-top
              class="mb-2"
            >
            </b-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <b-card
            title="Pina Colada"
            img-src="cocktail_pina_colada-1.png"
            img-alt="Image"
            img-top
            class="mb-2"
          >
          </b-card>
        </div>
        <div class="col-md-3">
          <b-card
            title="Poker Face"
            img-src="cocktail_poker_face-1.png"
            img-alt="Image"
            img-top
            class="mb-2"
          >
          </b-card>
        </div>

        <div class="col-md-3">
          <b-card
            title="Tequila Sunrise"
            img-src="cocktail_tequila_sunrise-1.png"
            img-alt="Image"
            img-top
            class="mb-2"
          >
          </b-card>
        </div>
        <div class="col-md-3">
          <b-card
            title="Virgin Mojito"
            img-src="cocktail_virgin_mojito-1.png"
            img-alt="Image"
            img-top
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
  methods: {
    async mix(title) {
      console.log(title);

      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch("getraenk.php?id=1", requestOptions)
        .then(async (response) => {
          const data = await response;

          this.countLoader(15);

          console.log("ok", data);
        });
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