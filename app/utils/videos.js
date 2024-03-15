export const getCommonVideos = async(url) => {
    console.log(url)
    const YOUTUBE_API_KEY = process.env.YOUTUBE_KEY;
    const BASE_URL = "youtube.googleapis.com/youtube/v3";
    const URL = `search?part=snippet&maxResults=25&q=${url}&type=video`;
    // const response = await fetch(
    // `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    // );
    // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${url}&type=video&key=${YOUTUBE_API_KEY}`);
    const res = await fetch(`https://${BASE_URL}/${URL}&key=${YOUTUBE_API_KEY}`)
    
    const data = await res.json();

    if(data?.error){
        console.log('An error occured getting the data')
        return [];
    }

    return data?.items.map((item) => {
       try{
        const id = item?.id?.videoId || item.id;
        return {
            title: item.snippet.title,
            id: id,
            imgUrl: item.snippet.thumbnails.high.url
        }
       } catch(err){
        console.log('Error getting videos', err)
        return err;
       }})
}