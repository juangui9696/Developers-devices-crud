<template>
<div>
    <h1 >Desarrolladores</h1>
    <table class="table center">
        <td>
            <tr><td>Name</td><td>Age</td><td>ID</td></tr>
            <tr v-for="dev in devs">
                <td>{{dev.name}}</td>
                <td>{{dev.age}}</td>
                <td>{{dev.id}}</td>
                <td>
                    <button class="btn btn-primary" @click.prevent="delDev(dev._id)">Remove</button>
                </td>
                <td>
                    <button class="btn btn-primary" @click="editDev(dev._id)">Edit</button>
                </td>
            </tr>
        </td>
        <td class="card card-body col-md-5">
            <form @submit.prevent="addDev()">
                <div class="">
                    <input type="text" placeholder="Name" v-model="Dev.name" class="form-control" >
                    <input type="number" placeholder="Id"  v-model="Dev.id" class="form-control">
                    <input type="number" placeholder="Age" v-model="Dev.age" class="form-control" >
                </div>
            <button class="btn btn-primary">addDev</button>
            </form>
        </td>
    </table>
</div>
</template>
<script>
export default {
    data(){
        return{
            devs: {},
            Dev:{
                name: '',
                age: null,
                id: null,
                devices: []
            }
        }
    },
    created() {
        this.getDevs()
    },
    methods: {
        addDev(){
            fetch('/devs', {
                method: 'POST',
                body: JSON.stringify(this.Dev),
                headers:{
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.getDevs();
            })
            this.Dev={}  
        },
        getDevs() {
            fetch('/devs')
            .then(res => res.json())
            .then(data => {
                this.devs = data;
            });
        },
        delDev(Id) {
            fetch('/devs/' + Id, {
                method: 'DELETE',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.getDevs();
            })
        },
        editDev(Id) {
            fetch('/devs/' + Id)
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }
}
</script>