import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { modules as cm } from "./business/constant.js";

@Module({
    imports: [
        ...Object.values(cm),
        RouterModule.register([
            {
                path: 'api',
                children: [
                    {
                        path: 'auth',
                        module: cm['AuthModule']
                    }
                ]
            }
        ])
    ]
})
export class ApiModule { }