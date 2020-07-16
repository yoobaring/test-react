import { createStore, combineReducers } from 'redux'

const initailForm = {
    img_url: [],
    name: '',
    des: '',
    latitude: '',
    longitude: '',
    price: '',
    area: '',
    type: '',
    category: '',
    tel: '',
    province: ''
  

}

const formReducer = (data = initailForm, action) => {

    switch (action.type) {      
        case 'CHANGE_NAME':
            return { ...data, name: action.name }
        case 'CHANGE_DES':
            return { ...data, des: action.des }
        case 'CHANGE_LATITUDE':
            return { ...data, latitude: action.latitude }
        case 'CHANGE_LONGITUDE':            
            return { ...data, longitude: action.longitude}
        case 'CHANGE_PRICE':
            return { ...data, price: action.price}
        case 'CHANGE_AREA':
            return { ...data, area: action.area} 
        case 'CHANGE_TYPE':
            return { ...data, type: action.type }          
        case 'CHANGE_CATEGORY':
            return { ...data, category: action.category }
        case 'CHANGE_TEL':
            return { ...data, tel: action.tel }
        case 'CHANGE_PROVINCE':
            return { ...data, province: action.province}

        default: return data
                }           
            
}

const homeReducer = (homes = [], action) => {
    switch (action.type) {
        case 'GET_HOMES':
            return action.homes
        case 'ADD_HOME':
            return [...homes, action.home]
        case 'ADD_IMG':
            return [...homes, action.home]
        case 'DELETE_HOME':
            return homes.filter(home => home.id !== +action.id)
        case 'UPDATE_HOME':
            return homes.map(home => {
                if (+home.id === +action.id)
                    return action.home;
                else return home;
            })
        default: 
            return homes
        }
            
}


const reducers = combineReducers({ 
    home: homeReducer, 
    form: formReducer 
})

export const store = createStore(reducers)