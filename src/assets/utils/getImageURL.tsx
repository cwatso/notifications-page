function getImageURL(fragment : string | null){
    const fragmentString : string = fragment || "";
    return new URL(fragmentString ,import.meta.url).href;
}

export default getImageURL;