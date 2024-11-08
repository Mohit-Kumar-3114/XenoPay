import { SendCard } from "../../../components/SendCard";

export default async function() {
    return <div className="w-full flex flex-col items-center">
        <div className="text-4xl text-gray pt-8 mb-8 font-bold letter">
            P2P Transfer
        </div>
        <div className="pt-4 flex justify-center">
            <div>
                <SendCard />
            </div>
            
        </div>
    </div>
}