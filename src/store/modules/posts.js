import wpposts from '../../../api/wpposts'
import wpmedia from '../../../api/wpmedia';

const state = {
  facilities_content:[]
}

const getters = {

}

const mutations = {
  storeFacilitiesContent(state,payload){
    state.facilities_content=[...payload]
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
        
        // console.log(wpmedia.getMediaById(clinicContent.data.featured_media))
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
  actions
}
