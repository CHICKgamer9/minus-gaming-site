import { Button } from "@/components/ui/button";
import Image from "next/image";

type ComponentCardProps = {
    title: string;
    dis: string;
    img_alt: string;
    img?: string;
    edit?: boolean;
};

export default function SetUpComponentCard({ title, dis, img, img_alt, edit }: ComponentCardProps) {
    return (
        <div className="flex flex-col gap-3">
            {img && <Image width={100} height={100} src={img} alt={img_alt}/>}
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl">{title}</h2>
                <p>{dis}</p>
                { edit && (
                    <Button className=" cursor-pointer" variant="outline">Change</Button>
                )}
            </div>
        </div>
    );
}