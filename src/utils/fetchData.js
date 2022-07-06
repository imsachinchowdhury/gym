export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'f71ac6a2c1msh109d7e5a3a0806bp1d2be3jsnb70ee4a94516'
      
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e20d14c642mshddb1c18e3a5ca92p1b171djsn5efb3131832c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    // console.log(data);
  
    return data;
  };

