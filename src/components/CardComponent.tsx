
interface Props{
    name?: string;
    isSoldout?:boolean;
    price? : number;
    image_url? : string;
}


const CardComponent = ({name="Cappuccino",isSoldout=true,price=13.12,image_url=""}:Props) => 
<div className="flex flex-col size-64">
    <div className="bg-slate-900 h-[70%] ">
        <img src={image_url} className="object-cover w-full h-full rounded-md " />
    </div>  
    
    <div className="flex justify-between px-2 mt-2" >
        <p>{name}</p>
        <p className="p-1 text-sm text-gray-900 bg-green-200 rounded-sm"> ${price} </p>
    </div>  
    <div className=" text-[12px] mt-4 px-2 flex justify-between">
         <div className="space-x-2">
            <span className="text-yellow-500">★</span>
             <span >4.7</span>
             <span className="text-stone-600">(55 votes)</span>
         </div>
         {isSoldout && <span className="text-red-800 align-middle"> Sold out</span> }
         
    </div>
</div>
  

export default CardComponent
