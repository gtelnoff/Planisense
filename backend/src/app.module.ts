import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trees } from './entities/tree.entity'
import { Tree } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [ Trees ],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([
    Trees
  ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
