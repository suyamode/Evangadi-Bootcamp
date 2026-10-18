export const fetchYouTubeVideos = async (apiKey) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=Apple&part=snippet,id&order=date&maxResults=9`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching YouTube data: ", error);
    return [];
  }
};
