import { AuthUser } from '../entities/auth-user.entity';

export class LoginResponseDTO {
  token: string;
  user: AuthUser;
}
