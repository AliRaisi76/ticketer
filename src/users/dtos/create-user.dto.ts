import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  /**
   * Because the IsEmail validator already checks if the input is string:
   * We don't use the IsString decorator to validate that.
   */
  @IsEmail()
  email: string;

  /**
   * Because the IsStrongPassword validator already checks if the input is string:
   * We don't use the IsString decorator to validate that.
   */
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
  password: string;
}
