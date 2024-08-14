import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";

export function Sales(){
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                       Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4"/>
                </div>
            <CardDescription>
                Novos clientes nas últimas 24 horas
            </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/uriennolasco.png"/>
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Urien Nolasco</p>
                        <span className="text-[12px] sm:text-sm text-gray-700">urien.nolasco@edu.pucrs.br</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shimpas-ville.png"/>
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Carlos Moraes</p>
                        <span className="text-[12px] sm:text-sm text-gray-700">carlos.moraes@edu.pucrs.br</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/mariahbf.png"/>
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Mariah </p>
                        <span className="text-[12px] sm:text-sm text-gray-700">mariah@edu.pucrs.br</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/andreirech.png"/>
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Andrei Rech</p>
                        <span className="text-[12px] sm:text-sm text-gray-700">andrei.rech@edu.pucrs.br</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/uriennolasco.png"/>
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Eduardo Wolf</p>
                        <span className="text-[12px] sm:text-sm text-gray-700">eduardo.wolf@edu.pucrs.br</span>
                    </div>
                </article>

                
            </CardContent>
        </Card>
    );
}