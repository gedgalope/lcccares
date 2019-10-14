import wpmedia from '../../../api/wpmedia'
const state={
  CarouselText:[
    {
      title: 'A place you can call home away from home',
      text: 'A place where you can trust, that seniors will be treated with respect and dignity'
    },
    {
      title:'Let them experience the best and personalized care provided by our experienced caregivers',
      text:'We are here to help you care for your loved ones'
    }
  ],
  CarouselMedia:[],
  facilitiesMedia:{},
  parallax_src:'',
  gallery:[],
  logo_src:''
}

const mutations={
  storeHomeCarousel(state,payload){
    state.CarouselMedia = [...payload]
  },
  storeFacilitesMedia(state,payload){
    state.facilitiesMedia = payload
  },
  storeParallax(state,payload){
    state.parallax_src = payload
  },
  storeGalllery(state,payload){
    state.gallery =[...payload]
  },
  storeLogo(state,payload){
    state.logo_src = payload;
  }
}
const getters={

}
const actions={
  /* eslint-disable */
  async getCarouselMedia({commit}){
    var mediaBuffer = [];
    let media = await wpmedia.getCArouselMedia();
    // console.log(media)
    media.data.forEach(element => {
      // console.log(element.media_details.sizes.full.source_url);
      mediaBuffer.push(element.media_details.sizes.full.source_url);  
    });
    // console.log(mediaBuffer);
    commit("storeHomeCarousel", mediaBuffer);
  },
  async getroomsMedia({commit}){
    let clinic = await wpmedia.getClinicMedia();
    let bed = await wpmedia.getBedroomMedia();
    let kitchen = await wpmedia.getKitchenMedia();
    let staff = await wpmedia.getStaffMedia();
    let comfort = await wpmedia.getComfortMedia();
    let room = await wpmedia.getRoomMedia();
    let objectBuffer={
      'clinic':[],'bed':[],'staff':[],'kitchen':[],'comfort':[],'room':[]
    };
    objectBuffer.clinic=[...copyData(clinic.data)];
    objectBuffer.bed=[...copyData(bed.data)];
    objectBuffer.staff=[...copyData(staff.data)];
    objectBuffer.kitchen=[...copyData(kitchen.data)];
    objectBuffer.comfort=[...copyData(comfort.data)];
    objectBuffer.room=[...copyData(room.data)];
    // console.log(objectBuffer)
    commit('storeFacilitesMedia',objectBuffer)
  },
  async getParallax({commit}){
    let src  = await wpmedia.getParallax();
    /*eslint-disable */
    // console.log(src.data[0].source_url);
    commit("storeParallax",src.data[0].source_url);
  },
  async getGalleryItems({commit}){
    let itemBuffer=[];
    let mediaItems = await wpmedia.getGallery();
    mediaItems.data.forEach(mediaItem => {
      itemBuffer.push(mediaItem.source_url)
    });
    // console.log(itemBuffer)
    commit("storeGalllery",itemBuffer);
  },
  async getLogo({commit}){
    let logoMedia = await wpmedia.getLogo();
    // console.log(logoMedia.data[0].source_url)
    commit('storeLogo',logoMedia.data[0].source_url);
  }

}


function copyData(array){
  let mediaBuffer=[];
  array.forEach(element => {
    // console.log(element.media_details.sizes.full.source_url);
    mediaBuffer.push(element.media_details.sizes.full.source_url);  
  });
  return mediaBuffer
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
