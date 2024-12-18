type APIResponseObject = {
	info: APIResponseInfo;
	data: CharacterData;
};

type APIResponseArray = {
	info: APIResponseInfo;
	data: CharacterData[];
};

type APIResponseInfo = {
	count: number;
	totalPages: number;
	previousPage: null | string;
	nextPage: null | string;
};

type CharacterData = {
	_id: number;
	films: string[];
	shortFilms: string[];
	tvShows: string[];
	videoGames: string[];
	parkAttractions: string[];
	allies: string[];
	enemies: string[];
	sourceUrl: string;
	name: string;
	imageUrl: string;
	createdAt: Date;
	updatedAt: Date;
	url: string;
	__v: number;
};

const getDisneyCharacterNameById = async (id: number): Promise<string> => {
	// hämta character på dess id
	const response = await fetch(`https://api.disneyapi.dev/character/${id}`);
	const data = (await response.json()) as APIResponseObject;

	// returnera namnet
	return data.data.name;
};

const searchDisneyCharacterByName = async (
	search: string
): Promise<CharacterData[]> => {
	const response = await fetch(
		`https://api.disneyapi.dev/character?name=${search}`
	);
	const data = (await response.json()) as APIResponseArray;

	return data.data;
};

const searchDisneyCharacter = async (
	param: string,
	search: string
): Promise<CharacterData[]> => {
	const response = await fetch(
		`https://api.disneyapi.dev/character?${param}=${search}`
	);
	const data = (await response.json()) as APIResponseArray;

	return data.data;
};

// här är synkron kod
console.log(await getDisneyCharacterNameById(308));

console.log(await searchDisneyCharacterByName("peter"));

console.log(await searchDisneyCharacter("films", "tangled"));
