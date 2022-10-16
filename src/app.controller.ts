import { Controller, Get, Render } from "@nestjs/common";
import axios from "axios";

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public async index() {
    var posts = await axios.get("http://localhost:5000/posts");
    return {posts: posts.data};
  }
}