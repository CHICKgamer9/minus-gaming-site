'use client'

import ComponentCard from "@/components/shared/cards/SetUpComponentCard"
import { StarterSetupComponents } from "../../../../../data/setups";
import { ProSetupComponents } from "../../../../../data/setups";
import { useParams } from 'next/navigation';

const ProductList = () => {

    const params = useParams();
    type SetupKey = 'Starter' | 'Pro';
    const id = params.id?.toString() as SetupKey | undefined;
    const allSetups: Record<SetupKey, typeof StarterSetupComponents> = {
        Starter: StarterSetupComponents,
        Pro: ProSetupComponents,
    };
    const currentSetupComponents = id && allSetups[id] ? allSetups[id] : [];


    
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{id}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentSetupComponents.map((component, index) => (
                <ComponentCard 
                    key={index} 
                    title={component.title}
                    img_alt={component.img_alt} 
                    dis={component.dis} 
                    img={component.image} 
                    edit={component.editable} />
                ))}
            </div>
        </div>
            
    )
}

export default ProductList