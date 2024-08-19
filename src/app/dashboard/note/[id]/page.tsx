import { FC } from "react";

interface pageProps {
  params: { id: string };
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className=" w-full h-[92vh] bg-white border-gray-300 border-l-[1px]">
      Note with id {params.id}
    </div>
  );
};

export default page;
