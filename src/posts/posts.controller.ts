import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { mockPosts } from '../mock.data';
import { mockCommunities } from '../mock.data';

@Controller('posts')
export class PostsController {
  private posts = [...mockPosts];

  // ดึงโพสต์ทั้งหมด
  @Get()
  getAllPosts() {
    return this.posts.map((post) => {
      const community = mockCommunities.find((c) => c.id === post.communityId);
      return {
        ...post,
        communityName: community?.name || 'Unknown',
      };
    });
  }

  // เพิ่มโพสต์ใหม่
  @Post()
  createPost(
    @Body()
    body: {
      username: string;
      title: string;
      content: string;
      communityId: number;
    },
  ) {
    const community = mockCommunities.find((c) => c.id === body.communityId);
    if (!community) {
      return { error: 'Invalid communityId' };
    }

    const newPost = {
      id: this.posts.length + 1,
      username: body.username,
      title: body.title,
      content: body.content,
      communityId: body.communityId,
      comments: [],
    };
    this.posts.push(newPost);
    return newPost;
  }

  @Put(':id')
  updatePost(
    @Param('id') id: number,
    @Body()
    body: {
      username: string;
      title: string;
      content: string;
      communityId: number;
    },
  ) {
    const postIndex = this.posts.findIndex((post) => post.id === Number(id));
    if (postIndex === -1) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    const post = this.posts[postIndex];

    // ตรวจสอบว่า username ตรงกับเจ้าของโพสต์หรือไม่
    if (post.username !== body.username) {
      throw new HttpException(
        'You can only edit your own posts',
        HttpStatus.FORBIDDEN,
      );
    }

    // อัปเดตโพสต์
    this.posts[postIndex] = {
      ...post,
      title: body.title || post.title,
      content: body.content || post.content,
      communityId: body.communityId || post.communityId,
    };

    return this.posts[postIndex];
  }

  @Delete(':id')
  deletePost(@Param('id') id: number, @Body() body: { username: string }) {
    const postIndex = this.posts.findIndex((post) => post.id === Number(id));
    if (postIndex === -1) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    const post = this.posts[postIndex];

    // ตรวจสอบว่า username ตรงกับเจ้าของโพสต์หรือไม่
    if (post.username !== body.username) {
      throw new HttpException(
        'You can only delete your own posts',
        HttpStatus.FORBIDDEN,
      );
    }

    // ลบโพสต์
    this.posts.splice(postIndex, 1);
    return { message: 'Post deleted successfully' };
  }

  // เพิ่ม Comment ในโพสต์
  @Post(':id/comments')
  addComment(
    @Param('id') postId: number,
    @Body() body: { username: string; content: string },
  ) {
    const post = this.posts.find((p) => p.id === Number(postId));
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
    const newComment = {
      id: post.comments.length + 1,
      username: body.username,
      content: body.content,
    };
    post.comments.push(newComment);
    return newComment;
  }
}
