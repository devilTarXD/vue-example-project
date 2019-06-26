<template>
    <div class="col-me-12 row">
        <StarItem 
            v-for="(item, index) in items"
            :key="index"
            :passedItem="item"
            :type="type"
        />
    </div>
</template>

<script>
import StarItem from '@/components/StarItem'
export default {
    name: 'starData',
    components: {
        StarItem
    },
    data() {
        return {
            type: this.$route.params.type,
            items: []
        }
    },
    watch: {
        $route: 'fetchItem'
    },
    methods: {
        fetchItem() {
            this.items = []
            this.type = this.$route.params.type
            let initial_ids = [ 13, 12, 3]
            for(let i in initial_ids) {
                let id = initial_ids[i]
                fetch(`https://swapi.co/api/${this.type}/${id}`, {method: 'GET'})
                .then(response => response.json())
                .then(json => this.items.push(json))
            }
        }
    },
    created() {
        this.fetchItem();
    }
}
</script>
