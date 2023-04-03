import { FC } from "react";

type ButtonProps = {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="w-32" onClick={onClick}>
            <a
                className="group relative w-full inline-block focus:outline-none focus:ring"
                href=""
            >
                <span
                    className="absolute w-full inset-0 translate-x-1.5 translate-y-1.5 bg-blue-200 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span
                    className="relative w-full inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase text-black group-active:text-opacity-75 text-center"
                >
                    {text}
                </span>
            </a>
        </button>
    );
};
