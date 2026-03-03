/* const madeVideo = document.querySelector(".image-wrapper");
const key = "a656d0e5243ab34c08a472ce99d82e8ca9596d9069c3d8bc95a5201b40393c66";
const URL = "https://serpapi.com/search?engine=google";
console.log(madeVideo);

madeVideo.addEventListener("click", openVideo);


async function openVideo(){
try {
const data = await getVideo();
const videoId = data.id.videoId;
madeVideo.innerHTML +=  `<iframe width="335" height="500" src="http://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`
  
} catch (error) {
    alert (error.message)
}
}

async function getVideo(){
    const response = await axios.get(URL, {params:{
    part: "snippet",
    q:"made chocolate",
    id: "DISjdfkSjc8&t=7s",
    type: "video",
    maxResults: 1,
    key,
}})
    console.log(response.data.items);
    
return response.data.items[0];
}

console.log(getVideo()); 
 */
/* function renderVideo(arr){
arr.map(({id}) => {
<
}) */

const key = "865a4b3e0caf1ca020a6248fbd90c8251478f40c5107409afda249b0789f6b2c";
const URL = "https://serpapi.com/search?engine=google";
const { getJson } = require("serpapi");
async function getVideo(){
getJson({
  q: "Tom Hanks",
  engine: "google_videos",
  device: "mobile",
  hl: "en",
  gl: "us",
  api_key: key
})
.then(({ videos_results })) => {
  console.log(videos_results);
}
    
    

}
getVideo();
