import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { GetUserDto } from './dtos/get-user.dto';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  type: GetUserDto,
  exposeDefaultValues: true,
})
export class AppController {
  @Get()
  findOne(): UserEntity {
    return new UserEntity({
      id: 1,
      firstName: 'Kamil',
      lastName: 'Mysliwiec'
    });
  }
}
