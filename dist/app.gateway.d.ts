import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { AuthService } from './auth/auth.service';
import { Server, Socket } from 'socket.io';
export declare class Payload {
    readonly message: string;
    readonly token: string;
}
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly authService;
    constructor(authService: AuthService);
    private logger;
    wss: Server;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleMessage(client: Socket, payload: Payload): void;
}
