import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_LOCAL_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/db/migrations/*.js}'],
      synchronize: false,
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    }),
    MessagesModule,
  ],
})
export class AppModule {}
