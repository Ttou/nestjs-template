import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { AuthModule } from "./business/auth/auth.module.js";

@Module({
    imports: [
        RouterModule.register([
            {
                path: 'api',
                children: [
                    {
                        path: 'auth',
                        module: AuthModule
                    }
                ]
            }
        ])
    ]
})
export class ApiModule {}