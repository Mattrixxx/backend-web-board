import { Controller, Get, Post, Body } from '@nestjs/common';
import { mockUsers } from '../mock.data';

@Controller('users')
export class UsersController {
  private users = [...mockUsers];

  @Post('login')
  login(@Body() body: { username: string }) {
    const user = this.users.find((u) => u.username === body.username);
    if (!user) {
      const newUser = { id: this.users.length + 1, username: body.username };
      this.users.push(newUser);
      return newUser;
    }
    return user;
  }
}
