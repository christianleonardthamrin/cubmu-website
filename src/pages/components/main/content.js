import Card from "./components/card";
import Tabs from "./components/tabs";

export default function Content() {
    const arr = [0, 1, 2, 3, 4]
    return (
        <div className="">
            <Tabs />
            <div className="mt-6 flex justify-center">
                <div className="flex flex-col flex-wrap gap-6 lg:grid lg:grid-cols-3 justify-around">
                    {arr.map((a, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}