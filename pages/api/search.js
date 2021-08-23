import axios from "axios";

const searchHandler = async (req, res) => {
    // Get the request query
    // Add query to API parameters

    // console.log(req.query);
    const query = req.query.term;

    const searchResults = await axios.get(
        "https://content.guardianapis.com/search",
        {
            params: {
                "api-key": process.env.GUARDIAN_API_KEY,
                q: query,
                "show-fields": "thumbnail",
            },
        }
    );

    const apiResults = searchResults.data.response.results.map((result) => {
        return {
            id: result.id,
            title: result.webTitle,
            url: result.webUrl,
            image: result.fields.thumbnail,
            date: result.webPublicationDate,
        };
    });

    res.status(200).json(apiResults);
};

export default searchHandler;
