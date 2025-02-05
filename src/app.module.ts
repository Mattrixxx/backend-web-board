import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CommunitiesModule } from './communities/communities.module';

@Module({
  imports: [PostsModule, UsersModule, CommunitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
