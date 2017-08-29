<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <v-ons-back-button>Home</v-ons-back-button>
            </div>
            <div class="center">About</div>
        </v-ons-toolbar>
        <div class="lks-block">
            <p>You can start your new cordova project perfectly with this template.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam in deserunt, quis quos sapiente laboriosam, quam itaque quibusdam earum dolorem, omnis quasi, tempora cupiditate. Hic, ipsa, atque! Laudantium, labore nemo.
            </p>
        </div>
        <v-ons-button modifier="large" style="margin: 6px" @click="log_event">log event</v-ons-button>
    </v-ons-page>
</template>
<script>
export default{
    data(){
        return {

        }
    },
    methods: {
        log_event(){
            window.FirebasePlugin.logEvent("select_content", {content_type: "page_view", item_id: "home"});
        }
    }
}
</script>