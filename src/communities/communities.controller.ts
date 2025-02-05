import { Controller, Get, Post, Delete, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { mockCommunities } from '../mock.data';

@Controller('communities')
export class CommunitiesController {
  private communities = [...mockCommunities];

  // ดึงรายการ Community ทั้งหมด
  @Get()
  getAllCommunities() {
    return this.communities;
  }
}
