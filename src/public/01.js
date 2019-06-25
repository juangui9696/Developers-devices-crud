const app = new Vue({
    el: '#app',
    data: {
      titulo: 'Developers',
      Developers: [],
    },
    methods: {
      AddDev(){
          this.Developers.push({name: 'juan', id: '1313'})
          this.Developers.remove({name: 'juan', id: '1313'})
          console.log(this.Developers.name)
        }
    }
  })