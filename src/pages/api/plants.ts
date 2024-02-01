// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([

    
    {        
        "id": 0,
        "name":"Ajuga reptans",
        "price":"20,00",
        "image": "/images/ajuga.png",
      },
      {        
        "id": 1,
        "name":"Cordyline fruticosa",
        "price":"10,00",
        "image": "/images/cordyline.png",
      },
      {        
        "id": 2,
        "name":"Crassula ovata",
        "price":"30,00",
        "image": "/images/crassula.png",
      },
      {        
        "id": 3,
        "name":"Cyperus rotundus",
        "price":"30,00",
        "image": "/images/cyperus.png",
      },
      {        
        "id": 4,
        "name":"Delairea odorata",
        "price":"30,00",
        "image": "/images/delairea.png",
      },
      {        
        "id": 5,
        "name":"Datura metel",
        "price":"30,00",
        "image": "/images/datura.png",
      },

  
   ]
   )
}
