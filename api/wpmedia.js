import api from './api'
export default {
  getMediaById(id){
    return api().get("wp/v2/media/" + id);
  },
  getCArouselMedia() {
    return api().get("wp/v2/media?parent=91")
  },
  getRoomMedia() {
    return api().get("wp/v2/media?parent=106")
  },

  getStaffMedia() {
    return api().get("wp/v2/media?parent=104")
  },

  getBedroomMedia() {
    return api().get("wp/v2/media?parent=102")
  },

  getKitchenMedia() {
    return api().get("wp/v2/media?parent=98")
  },

  getClinicMedia() {
    return api().get("wp/v2/media?parent=108")
  },

  getComfortMedia() {
    return api().get("wp/v2/media?parent=100")
  },
}