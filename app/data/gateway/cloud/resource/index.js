export const QueryResource = {
    Search: (keyword, offset, limit) => `w/api.php?action=query&format=json&list=search&srsearch=${keyword}&srlimit=${limit}&sroffset=${offset}`,
};
