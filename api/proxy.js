export default async function handler(req, res) {
  const spotifyUrl = req.query.url;

  if (!spotifyUrl) {
    return res.status(400).json({ error: "URL lagu Spotify belum dimasukkan!" });
  }

  try {
    const targetUrl = `https://api.theresav.eu/api/download/spotify?url=${encodeURIComponent(spotifyUrl)}`;

    const apiResponse = await fetch(targetUrl, {
      headers: {
        "x-apikey": "KbNmF"
      }
    });

    const data = await apiResponse.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', apiResponse.headers.get('content-type') || 'application/json');

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
                                 }
