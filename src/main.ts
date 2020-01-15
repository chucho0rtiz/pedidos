import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import "dotenv/config";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { UsersModule } from "./users/users.module";

const PORT = process.env.PORT || "3000";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle("pedidos")
    .setDescription("endPoint de pedidos")
    .setVersion("1.0")
    .addTag("users")
    .addTag("pedidos")
    .addTag("tareas")
    .addTag("direcciones")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
  await app.listen(PORT);
}
bootstrap();
