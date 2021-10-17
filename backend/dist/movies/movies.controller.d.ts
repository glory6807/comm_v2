import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movies.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    readonly moviesService: MoviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    getOne(id: number): Movie;
    create(movieData: CreateMovieDto): Movie[];
    remove(movieId: number): void;
    patch(movieId: number, updateData: UpdateMovieDto): void;
}
