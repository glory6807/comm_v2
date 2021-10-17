import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundError } from 'rxjs';
import { Movie } from './entities/Movies.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll", ()=>{

    it("sholud return an array", ()=>{
      
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
      
    })

  });


  describe("getOne", ()=>{

    it("sholud return a Movie", ()=>{
      service.create({
        title:"Test Movie",
        genres: ['test'],
        year:2000
      });
      
      const result = service.getOne(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
      
    });


    it("sholud throw 404 error", () => {
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

  });

  describe("deleteOne", ()=>{

    it("delete a movie", ()=>{

      service.create({
        title: 'Test Movie',
        genres: ['Test'],
        year: 2000
      });

      const allMovies = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();
      expect(afterDelete.length).toEqual(allMovies.length - 1);
      
    });

    it("should return a 404", ()=>{
      try{
        service.deleteOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })

  });

  describe("create", ()=> {
    it("should create a movie", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['Test'],
        year: 2000
      });
      const afterCreate = service.getAll().length;

      expect(afterCreate).toBeGreaterThan(beforeCreate);

    })
  })

  describe("update", ()=>{
    it("should update a movie", ()=>{
      service.create({
        title: 'Test Movie',
        genres: ['Test'],
        year: 2000
      });

      service.update(1, {title:"Updated Test"});

      const movie = service.getOne(1);
      expect(movie.title).toEqual("Updated Test");
    });


    it("should return a 404", ()=>{
      try{
        service.update(999, {});
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })

  })

});
