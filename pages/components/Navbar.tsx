import { FC } from "react";
import Button from "./Button";

interface NavbarProps {
    setCategory: (category: string) => void;
}

const Navbar: FC<NavbarProps> = ({ setCategory }) => {
    const handleClick = (category: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        setCategory(category);
    };

    return (
        <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row justify-center border-b items-center border-gray-100 py-4 md:space-x-4 space-y-4 md:space-y-0">
                <li>
                    <Button text="Threads" onClick={handleClick("Threads")} />
                </li>
                <li>
                    <Button text="Videos" onClick={handleClick("Videos")} />
                </li>
                <li>
                    <Button text="Websites" onClick={handleClick("Websites")} />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
