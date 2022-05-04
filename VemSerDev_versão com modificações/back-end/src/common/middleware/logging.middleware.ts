import { Injectable, NestMiddleware, Param } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UsersService } from "src/users/users.service";
@Injectable()
export class LoggingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        /*
        if(req.path.indexOf('itens')){
            const userId = req.path.split("/")
            if(UsersService.find(userId[userId.length - 1])== null){
               console.log('Ok');
                throw "Usuário não altorizado"; 
            }
        }*/
        console.log(req.path);
       next();
    }
}