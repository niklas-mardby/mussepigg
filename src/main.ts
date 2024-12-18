type DisneyCharacter = {
	info: CharacterAPIInfo;
	data: CharacterData;
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

type CharacterAPIInfo = {
	count: number;
	totalPages: number;
	previousPage: null;
	nextPage: null;
};

const getDisneyCharacterNameById = async (id: number): Promise<string> => {
	// hämta character på dess id
	const response = await fetch(`https://api.disneyapi.dev/character/${id}`);
	const data = (await response.json()) as DisneyCharacter;

	// returnera namnet
	return data.data.name;
};

// här är synkron kod
console.log(await getDisneyCharacterNameById(308));
