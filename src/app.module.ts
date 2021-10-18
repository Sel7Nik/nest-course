import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'user',
      database: 'nest-course',
      models: [],
      autoLoadModels: true
    }),
  ],
})

export class AppModule { }