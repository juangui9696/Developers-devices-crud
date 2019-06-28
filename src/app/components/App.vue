<template>
<div>
    <h1>Hello word</h1>
    <button class="btn btn-primary" @click.prevent="addDev">addDev</button>
</div>
</template>
<script>
export default {
    data(){
        return{
            dev:{
                name: '',
                age: 0,
                id: 0,
                devices: []
            }
        }
    },
    methods: {
        addDev(){
            fetch('/devs', {
                method: 'POST',
                body: JSON.stringify(this.dev),
                headers:{
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            this.dev={}  
        }
    }
}
</script>
