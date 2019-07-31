import wpposts from '../../../api/wpposts'
import wpmedia from '../../../api/wpmedia';

const state = {
  facilities_content:[],
  vmg:{},
  company_info:{}
}

const getters = {

}

const mutations = {
  /*eslint-disable*/
  storeFacilitiesContent(state,payload){
    state.facilities_content=[...payload]
  },
  storeVMG(state,payload){
    state.vmg = payload
    // console.log(payload)
    // Object.assign(state.vmg,payload)
  },
  storeCompanyInfo(state,payload){
    state.company_info = payload
    // Object.assign(state.company_info,payload)

  }
}

const actions = {
  /*eslint-disable*/
  async getFacilitiesContent({commit}){
    let clinicContent = await wpposts.getClinicContent();
    let comfortContent = await wpposts.getComfortContent();
    let bedroomContent = await wpposts.getBedroomContent();
    let roomContent = await wpposts.getRoomContent();
    let kitchenContent = await wpposts.getKitchenContent();
    let staffContent = await wpposts.getStaffContent();
    //featured_media, acf.car-title, acf.car-content
    let contentBuffer=[]
    contentBuffer = [
      {
        media : await getMedia(clinicContent.data.featured_media),
        title : clinicContent.data.acf.title,
        message : clinicContent.data.acf.message
      },
      {
        media : await getMedia(comfortContent.data.featured_media),
        title : comfortContent.data.acf.title,
        message : comfortContent.data.acf.message
      },
      {
        media : await getMedia(bedroomContent.data.featured_media),
        title : bedroomContent.data.acf.title,
        message : bedroomContent.data.acf.message
      },
      {
        media : await getMedia(roomContent.data.featured_media),
        title : roomContent.data.acf.title,
        message : roomContent.data.acf.message
      },
      {
        media : await getMedia(kitchenContent.data.featured_media),
        title : kitchenContent.data.acf.title,
        message : kitchenContent.data.acf.message
      },
      {
        media : await getMedia(staffContent.data.featured_media),
        title : staffContent.data.acf.title,
        message : staffContent.data.acf.message
      }

    ]
    // console.log(contentBuffer);
    commit('storeFacilitiesContent' , contentBuffer)
  },
  async getVMG({commit}){
    let vmg = await wpposts.getVMG();
    // console.log(vmg.data.acf)
    commit('storeVMG',{
      comp_about:vmg.data.acf.comp_about,
      comp_mission:vmg.data.acf.comp_mission,
      comp_goal:vmg.data.acf.comp_goal
    })
  },
  async getCompanyInfo({commit}){
    let companyInfo = await wpposts.getCompanyInfo();
    // console.log(companyInfo.data.acf.comp_location);
    commit('storeCompanyInfo',{
      comp_location:companyInfo.data.acf.comp_location,
      comp_phonenum:companyInfo.data.acf.comp_phonenum,
      comp_telnum: companyInfo.data.acf.comp_telnum,
      comp_email:  companyInfo.data.acf.comp_email,
      comp_license: companyInfo.data.acf.comp_license,
    })
  }
}

async function getMedia(id){
  let media = await wpmedia.getMediaById(id)
  /*eslint-disable*/
  // console.log(media.data.source_url)
  return media.data.source_url;
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
