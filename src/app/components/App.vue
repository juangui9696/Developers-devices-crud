<template>
<div>
    <h1 >Desarrolladores</h1>
    </router-view>
    <div class="text-center">
        <table class="table">
            <td class="md-mt-5">
                <tr><th>Name</th><th>Age</th><th>ID</th><th>Actions</th></tr>
                <tr v-for="dev in devs">
                    <td>{{dev.name}}</td>
                    <td>{{dev.age}}</td>
                    <td>{{dev.id}}</td>
                    <td>
                        <button class="btn btn-primary" @click.prevent="editDev(dev._id)">Devices</button>
                        <button class="btn btn-danger" @click.prevent="delDev(dev._id)">Remove</button>
                        <button class="btn btn-success" @click.prevent="editDev(dev._id)">Edit</button>
                    </td>
                </tr>
            </td>
            <td class="card card-body">
                <form @submit.prevent="addDev()">
                    <div>
                        <input type="text" placeholder="Name" v-model="Dev.name" class="form-control" >
                        <input type="number" placeholder="Id"  v-model="Dev.id" class="form-control">
                        <input type="number" placeholder="Age" v-model="Dev.age" class="form-control" >
                        <br>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary">addDev</button>
                        <div @click="putDev(edit)" v-if="edit" class="btn btn-success">Update</div>
                    </div>
                </form>
            </td>
        </table>
    </div>
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
            },
            edit: null
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
            this.Dev = {}  
            this.edit = null
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
                .then(data => {
                    this.Dev.name = data.name
                    this.Dev.id = data.id
                    this.Dev.age = data.age
                    this.Dev.devices = data.devices
                    this.edit = Id
                    console.log(data)
                })
        },
        putDev(Id) {
            fetch('/devs/' + Id, {
                method: 'PUT',
                body: JSON.stringify(this.Dev),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.edit = null
                this.Dev = {}
                this.getDevs()
            })
        }
    }
}
</script>