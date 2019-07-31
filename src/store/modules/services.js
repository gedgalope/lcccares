import wpservices from '../../../api/wpservices'

const state = {
  services:[]
}

const getters={

}

const mutations={
  appendServices(state,payload){
    state.services=[...payload]
  }
}

const actions={
  /*eslint-disable*/
  async getServicesPost({commit}){
    let services = await wpservices.getAllServices();
    let servicesBuffer=[];
    services.data.forEach(element => {
      let buffer={
        title:element.acf.service_title,
        description:element.acf.service_description
      };
      servicesBuffer.push(buffer);
    });
    commit('appendServices',servicesBuffer);
    // console.log(servicesBuffer);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}