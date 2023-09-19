import * as actions from './actions';

const Homesilce=(state={ url:{},
genres:{}},action)=>{

    switch(action.type){
        case actions.CONFIGRATION:
            return {url:action.payload};
        case actions.GENRES:
            return {genres:action.payload};
        default: 
            return {...state};
    }
}
export default Homesilce;