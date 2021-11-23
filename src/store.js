import { createStore } from "vuex";
// import { Storage } from "@capacitor/storage";
export default new createStore({
    state(){
        return {
            imgs:[],
            greyImg:null,
            grade:0
        }
    },

})