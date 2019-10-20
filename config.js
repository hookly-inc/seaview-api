const outputFormat = "json";
const apiKey = "";
const urlKey = `&key=${apiKey}`;

function query(type,coordinates){
    parameters = `${type}=${coordinates}`;
    return query.url = `https://maps.googleapis.com/maps/api/elevation/${outputFormat}?${parameters}${urlKey}`;
}

module.exports = query;