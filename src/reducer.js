export const initialstate={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // remove after finished develpment......
    // token:"BQADXhX-EOWA01geRfA2BXgi7LI_HMd4fbglMdbs7icSwEGUW5Ibg948yOBtfmi4oiu_dnwWBWpon5bmmbQfa5jo8m6ju8zyOUnFsmtIRKC-QNyq32hfl08k023v4tfNgpURk-BYwf3vMeOlBQraGDlVKDwC9fZ7yVKW_LHJJDv9lMvsSCzjWcg4PXGzUGhEtRTKbG2r4PIfvy_M-MYH"
}

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            }
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists,
            }
            // SET_DISCOVER_WEEKLY
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }
}
export default reducer
