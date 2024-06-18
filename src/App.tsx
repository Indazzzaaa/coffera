import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";

interface Data{
    id:number;
    title:string;
    image:string;
}



const App = () =>{ 
    
    const [data, setData] = useState<Data[]>();
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json:Data[] = await resp.json();
      setData(json);
    } catch (err:any) {
      setData(err.message);
    }
  }

  useEffect(() => {
    getData();
    console.log(data);
    
  }, []);

    
    
    return(
  <div className="min-h-screen text-gray-300 bg-background ">
    <div className=" bg-banner h-[30vh] rounded-t-md bg-cover bg-center flex align-middle justify-center relative " >
        <div className="overflow-y-scroll no-scrollbar fixed top-24 w-[80vw] bg-stone-900 h-[80vh] rounded-md">
            <div className="flex flex-col items-center pt-16">
                <div className="space-y-4 text-center max-w-96 max-h-32">
                <h1 className=" font-playwrite"> Our Collection </h1>
                    <p className="text-gray-600/80 tracking-widest  font-roboto line-clamp-3 text-[.8rem]">
                    Awaken Your Senses with Our Artfully Brewed <br />Coffee, Perfectly Crafted for Every Moment.<br/>
                    Where Every Cup Tells a Story.
                    </p>
                </div>

                <div className="flex gap-4 mt-4 text-[.8rem]">
                    <button className="p-2 rounded-md bg-slate-500"> All Products </button>
                    <button className="p-2 rounded-md bg-stone-800"> Available Now </button>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-4 justify-items-center gap-x-4 gap-y-8 lg:grid-cols-3 " >

                {data?.map((_data:Data)=><CardComponent key={_data.id} name={_data.title} image_url={_data.image} isSoldout={_data.id%2==0}/>)  }

                 
            </div>
            

            

        </div>

        
        
    </div>
  </div>
)};
export default App;
