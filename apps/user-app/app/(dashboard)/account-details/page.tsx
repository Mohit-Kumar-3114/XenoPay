import { BalanceCard } from "../../../components/BalanceCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import "../../style.css"

async function getBalance() {
    const session = await getServerSession(authOptions);
    const no=await prisma.user.findFirst({
        where:{
            id:Number(session?.user?.id)
        }
    })
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        id:session?.user?.id || 0,
        number:no?.number || "",
        amount: balance?.amount || 0,
    }
}

export default  async function(){
    const balance = await getBalance();
    return (
        <div className="w-full flex flex-col items-center">
    <div className="text-4xl text-gray-950 pt-8 mb-8 font-bold letter">
    Account-Info
   </div>
   <div className="w-full pt-4 flex justify-center mb-4">
   <BalanceCard amount={balance.amount} id={balance.id} p_number={balance.number} />
</div>
</div>
    )
}