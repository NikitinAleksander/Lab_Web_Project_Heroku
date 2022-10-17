import { Controller, Get, Render } from "@nestjs/common";
import fetch from "node-fetch";

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public async index() {
    const response = await fetch("http://localhost:5000/posts",{method:"GET"});
    const data = await response.json();

    return {posts: data};
  }

  @Get('login')
  @Render('login.pug')
  root(){
    return '';
  }
}
