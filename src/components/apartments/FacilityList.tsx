import type { TUlBlock } from "../../types/types";

interface MyComponentProps {
  facility: TUlBlock;
}



export const FacilityList = ({ facility }: MyComponentProps) => {
  return (
    <>
        <ul className="space-y-2">
            {facility.facilityItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-slate-500 text-sm lg:text-base hover:text-slate-800 transition-colors"
                >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"/>
                    {item}
                </li>
              ))}
        </ul>
    </>
  );
};