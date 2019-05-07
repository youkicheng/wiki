export default {
  exploreList (state) {
      return state.randomList.map(data => {   
        let { pageid, title, extract, thumbnail, isCollected } = data 
        thumbnail = thumbnail && thumbnail.source
        return {
          id: pageid,
          title,
          extract,
          isCollected,
          thumbnail
        }

      })
  }

}
