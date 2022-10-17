import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public async index() {
    return {posts: []};
  }
}