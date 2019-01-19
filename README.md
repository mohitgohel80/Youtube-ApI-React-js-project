Will use unsplash API to get Images

URL : https://unsplash.com/developers

Second Project:

https://console.developers.google.com

step 1 : create project

step 2 : enable api for youtube

how to call from react APP.

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
part: 'snippet',
maxmaxResults: 5,
key: 'dsfdfdfdfds'
}
})

from App component call lke this

axios.get('/search', {
params: {
q: 'user input'
}
})

final response get from : response.data.items

store response.data.items in state and pass to videoLIst component and loop through all items like

videos.map((video) => {

    console.log(video)

    see this console you can see
    snippet.title property  => for title
    snippet.thumbnails.medium.url => for image URL

    to show video

    videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    <iframe src={videoSrc}/>

})

this item has snippet.title property
