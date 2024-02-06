// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([

    
    {        
        "id": 0,
        "ordem": 0,
        "name":"Ajuga reptans",
        "price":20.50,
        "image": "/images/ajuga.png",
        
      },
      {        
        "id": 1,
        "ordem": 2,
        "name":"Cordyline fruticosa",
        "price":43.33,
        "image": "/images/cordyline.png",
      },
      {        
        "id": 2,
        "ordem": 1,
        "name":"Crassula ovata",
        "price":22.99,
        "image": "/images/crassula.png",
      },
      {        
        "id": 3,
        "ordem": 10,
        "name":"Cyperus rotundus",
        "price":13.33,
        "image": "/images/cyperus.png",
      },
      {        
        "id": 4,
        "ordem": 0,
        "name":"Delairea odorata",
        "price":33,
        "image": "/images/delairea.png",
      },
      {        
        "id": 5,
        "ordem": 3,
        "name":"Datura metel",
        "price":32.2,
        "image": "/images/datura.png",
      },
      


  
   ]
   )
}
