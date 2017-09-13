const Koa = require('koa');
const app = new Koa();
const port = 520;

app.use( async ctx => {
  ctx.body = 'hello, I am Qiu Zhaomei';
});

app.listen(port, () => {
  console.log(`listen:${port}`);
});
