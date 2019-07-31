import wpteam from '../../../api/wpteam'
import wpmedia from '../../../api/wpmedia'
const state ={
  team_members:[]
}

const getters = {

}

const mutations = {
  storeTeamData(state, payload){
    state.team_members = [...payload];
  }
}

const actions = {
  /* eslint-disable */
  async getTeamMembers({commit}){
    let teamMem=[];
    let teamBuffer = await wpteam.getAllTeamMem();
    // console.log(teamBuffer.data.acf.mem_name)
    for (let index = 0; index < teamBuffer.data.length; index++) {
      teamMem.push(
            {
              'name': teamBuffer.data[index].acf.mem_name,
              'info': teamBuffer.data[index].acf.mem_info,
              'license':teamBuffer.data[index].acf.mem_license,
              'age':teamBuffer.data[index].acf.mem_age,
              'media': await getMedia(teamBuffer.data[index].id)
            }
      );
    }
    // console.log(teamMem);
    commit('storeTeamData',teamMem)
  }
}

async function getMedia(id){
  let media = await wpmedia.getMediaParent(id);
  // console.log(media.data[0].source_url);
  return media.data[0].source_url;
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}