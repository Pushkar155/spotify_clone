export const authEndpoint="https://accounts.spotify.com/authorize";

const redirectUri="https://spotifyp1000.netlify.app/";
// const redirectUri="https://mellow-squirrel-c234ce.netlify.app/";

const clintid="e6733fef749b4895983aa6f663cd756e";

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const gettokenFromUrl=()=>{
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial,item) =>{
            let parts=item.split('=')
            initial[parts[0]]=decodeURIComponent(parts[1])
            
            return(initial)

        },{});
}

export const loginurl=`${authEndpoint}?client_id=${clintid}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;
