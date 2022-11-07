class DemoController {
  constructor() {
  }
  async demo(ctx) {
    ctx.body = {
      "message": "hello from demo"
    }
  }
}

export default new DemoController()