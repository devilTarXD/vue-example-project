<template>
    <div class>
        <h3>Dashboard</h3>
        <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
        <hr />
        <AddEvent />
        <hr />
        <div class="col-md-12 row">
            <EventItem
                v-for="(event_item, index) in this.$store.state.events"
                :event="event_item"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import { firebaseApp, eventsRef } from "@/firebaseApp";
import AddEvent from "@/components/AddEvent";
import EventItem from "@/components/EventItem";

export default {
    name: "Dashboard",
    components: {
        AddEvent,
        EventItem
    },
    methods: {
        signOut() {
            this.$store.dispatch("signOut");
            firebaseApp.auth().signOut();
        }
    },
    mounted() {
        eventsRef.on("value", snap => {
            let events = [];
            snap.forEach(event => {
                events.push(event.val());
            });
            this.$store.dispatch('setEvents', events)
        });
    }
};
</script>

