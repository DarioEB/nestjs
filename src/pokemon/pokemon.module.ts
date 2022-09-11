import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

// Pokemon Module nexecita importar el configModule para las .env

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Pokemon.name, schema: PokemonSchema, }
    ])
  ],
  exports: [
    MongooseModule
  ]
})
export class PokemonModule {}
