import prisma from '@/libs/prismadb'

interface IParams{
    productId?: string
}

export default async function getProductById(params: IParams){
    try {
        const {productId} = params;
        if (!productId) {
            throw new Error('Product ID is required.');
        }
        
        const product = await prisma.product.findUnique({
            where:{
                id: productId

                
            }, 
            
            include:{
                reviews:{
                    include: {
                        user: true
                    },
                    orderBy:{
                        createdDate: 'desc'
                    }
                }
            }
        })

        if(!product){
            return null;
        }
        return product;
    } catch (error: any) {
        throw new Error(error)
    }
}