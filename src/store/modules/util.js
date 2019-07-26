const state={
  ishidden:false,
  photos: [
  "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1618943/pexels-photo-1618943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/257818/pexels-photo-257818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2230/restaurant-coffee-chocolate-dessert.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1137473/pexels-photo-1137473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/80597/burger-hamburger-onion-tomatoe-80597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/47320/burger-bacon-snack-fast-food-47320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/327135/pexels-photo-327135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ]
}

const mutations={
  changeState(state){
    state.ishidden = !state.ishidden
  }
}
const getters={

}
const actions={

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
