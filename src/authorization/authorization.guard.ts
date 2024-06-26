import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {expressJwtSecret, GetVerificationKey} from "jwks-rsa";
import {promisify} from "util";
import {expressjwt as jwt } from "express-jwt";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_DOMAIN: string;
  private AUTH0_AUDIENCE: string;
  private AUTH0_ISSUER: string;

  constructor(private configService: ConfigService) {
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN');
    this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE');
  }

  async canActivate(context: ExecutionContext,): Promise<boolean> {
    const req = context.getArgByIndex(0);
    const res = context.getArgByIndex(1);

    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }) as GetVerificationKey,
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256']
      }),
    );

    try{
      await checkJwt(req, res);
      return true;
    } catch (error){
      throw new UnauthorizedException(error);
    }
  }
}
