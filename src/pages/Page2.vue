<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button>Home</v-ons-back-button>
            </div>
            <div class="center">Page2</div>
        </v-ons-toolbar>
        <v-ons-list>
          <v-ons-list-header>
            Text input
          </v-ons-list-header>
          <v-ons-list-item>
            <div class="center">
                <v-ons-input placeholder="Input your name" float
                    v-model="name" >
                </v-ons-input>
            </div>
          </v-ons-list-item>
        </v-ons-list>
        <v-ons-button modifier="large" @click="save">保存</v-ons-button>
        <v-ons-button modifier="quiet" @click="load">読込</v-ons-button>
    </v-ons-page>
</template>
<script>
export default {
    computed: {
        name: {
            get: function () {
                console.log('get');
                return this.$store.state.page2.name;
            },
            set: function (newValue){
                console.log('set');
                this.$store.commit('page2/set', newValue)
            }
        }
    },
    methods: {
        save: function () {
          var key = 'lsk1';
          var storage = window.localStorage;
          storage.setItem(key, this.name) // Pass a key name and its value to add or update that key.
        },
        load: function () {
          var key = 'lsk1';
          var storage = window.localStorage;
          var value = storage.getItem(key); // Pass a key name to get its value.
          this.name = value;
        }
    }
}
</script>