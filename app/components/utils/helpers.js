// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
var apiKey = "59a1753423214dc192ad6e53c56523bd";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runParameters(query, startYear, endYear) {
    const searchLimit =5;

    //callback will be results
    var results = [];
    // if(startYear == ""){
    //   startYear == "1900";
    // }
    //
    // if(endYear == ""){
    //   endYear == "2016"
    // }

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    var apiKey = "59a1753423214dc192ad6e53c56523bd";
    var q = query;
    var startDate = startYear+"0101";
    var endDate = endYear+"1231";
    queryURL = queryURL
              +"?api-key=" +apiKey
              +"?q=" +query
              +"?begin_date=" +startDate
              +"?end_date=" +endDate;
              
    axios.get(queryURL).then(response => {

      for(var i =0; i < searchLimit; i++){
        //create empty object articles to store into results
        var articles = {};
        articles.title = response.response.docs[i].headline.main;
        articles.url = response.response.docs[i].web_url;
        articles.date= Date.now();

        result.push(articles);
      }
      //send back to where its called
      return results;
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSaved() {
    return axios.get(`/api/saved`);
  },

//  This function posts new searches to our database.
  postSaved(article) {
    return axios.post(`/api/saved/${id}`, { article });
  },

  removeSaved(id){
      return axios.delete(`/api/saved/${id}`);
  }
};

// We export the API helper
export default helper;