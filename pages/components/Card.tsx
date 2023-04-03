import { FC } from "react";

type CardProps = {
    title: string | undefined;
    link: string | undefined;
    description: string | undefined;
    tag: string | undefined;
};

const Card: FC<CardProps> = ({ title, link, description, tag }) => {
    return (
        <a href={link} className="group relative block w-64 h-64 sm:w-64 sm:h-64 lg:w-64 lg:h-64">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div
                className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
                <div
                    className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >

                    <h2 className="my-4 text-xl font-medium sm:text-2xl">{title}</h2>
                    <span
                        className="whitespace-nowrap rounded-full bg-blue-300 px-2.5 py-0.5 text-sm text-blue-600"
                    >
                        {tag}
                    </span>
                </div>

                <div
                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                    <h3 className="mt-4 text-l font-medium sm:text-l">{title}</h3>

                    <p className="mt-4 text-sm sm:text-base">
                        {description}
                    </p>

                    <p className="text-blue-400 mt-8 font-bold">Go -{">"} </p>
                </div>
            </div>
        </a>
    );
};

export default Card;
