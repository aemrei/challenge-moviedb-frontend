interface Movie {
  id: number;
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  credits?: { cast: Cast[] };
  videos?: { results: Video[] };
}

interface Cast {
  id: number;
  cast_id: number;
  character: string;
  name: string;
  profile_path: string | null;
}

interface Video {
  id: string;
  name: string;
  key: string;
  site: string;
  type: string;
}
