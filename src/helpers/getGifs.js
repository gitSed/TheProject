export const getGifs = async (category) => {
  const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=gcxBZU55DYxqzyUQbDYHn1UuZ5JySJTx&q=${encodeURI(
    category,
  )}&limit=10`;

  const { data } = await fetch(giphyURL).then((resp) => resp.json());

  const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
    id,
    title,
    url,
  }));

  return gifs;
};
