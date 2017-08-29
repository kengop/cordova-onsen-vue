<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
                    <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
            <div class="center">Vue-OnsenUI App</div>
        </v-ons-toolbar>
        <p class="lks-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo alias porro officia, odio temporibus sit voluptate eveniet excepturi quis nobis ab voluptas sequi, ducimus at atque animi? Labore, odio, iure.
        </p>
        <v-ons-card @click="push">
            <div class="title">About</div>
            <div class="content">Cordova Template</div>
        </v-ons-card>

        <v-ons-list>
            <v-ons-list-header>WhiteListの確認</v-ons-list-header>
            <v-ons-list-item><a href="http://kengop.sample.s3-website-ap-northeast-1.amazonaws.com/">外部ページ (登録済み)</a></v-ons-list-item>
            <v-ons-list-item><a href="https://ja.wikipedia.org/">Wikipedia (未登録)</a></v-ons-list-item>
        </v-ons-list>

        <v-ons-button modifier="large--quiet" @click="$store.commit('splitter/toggle')">Open left menu</v-ons-button>
        <v-ons-button modifier="large" style="margin: 6px 0" @click="openlink_system">Open (_system)</v-ons-button>
        <v-ons-button modifier="large" style="margin: 6px 0" @click="openlink_blank">Open (_blank)</v-ons-button>
        <v-ons-button modifier="large" style="margin: 6px 0" @click="openlink_self">Open (_self)</v-ons-button>
    </v-ons-page>
</template>
<script>
import About from './About.vue';
export default{
    data(){
        return {

        }
    },
    methods: {
        push(page){
            this.$store.commit('navigator/push', About);
        },
        openlink_system(){
            // loads in the system browser
            var ref = cordova.InAppBrowser.open('http://apache.org', '_system');
            ref.show();
        },
        openlink_blank(){
            // loads in the InAppBrowser
            var ref = cordova.InAppBrowser.open('http://apache.org', '_blank');
            ref.show();
        },
        openlink_self(){
            // loads in the Cordova WebView
            var ref = cordova.InAppBrowser.open('http://apache.org', '_self');
            ref.show();
        }
    }
}
</script>
<style scoped>
.intro {
  text-align: center;
  padding: 0 20px;
  margin-top: 40px;
}

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>