import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parcelList:[]
  },
  mutations: {
    getParcelList(state,parcelList){
      console.log("mutations")
      console.log(parcelList)
      state.parcelList.push(...parcelList);
      state.parcelList.map(parcel => {
        switch(parcel.status){
          case 0 :
            parcel.status = '未预约';
            break;
          case 1 :
            parcel.status = '已预约';
            break;
          case 2 :
            parcel.status = '已取件';
            break;
        }   
      })
    },
    ensureParcelBeToken(state,item){
      let parcel = state.parcelList.find(element  => element.id == item.id);
      switch(item.status){
        case 0 :
          parcel.status = '未预约';
          break;
        case 1 :
          parcel.status = '已预约';
          break;
        case 2 :
          parcel.status = '已取件';
          break;
      } 
    }

  },
  actions: {
    getParcelList({commit}){
      axios.get("http://localhost:8090/parcels")
          .then(function (response) {
            console.log(response.data);
            let parcelList = response.data;
            commit("getParcelList",parcelList)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    ensureParcelBeToken({commit},item){
      item.status = 2;
      axios.put("http://localhost:8090/parcels",item)
          .then(function (response) {
            console.log(response.data);
            commit("ensureParcelBeToken",item)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
  }
})
