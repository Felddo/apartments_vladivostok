import { BLOCKS_DATA } from "../../data/data";
import { Block } from "./Block";
import { useMemo } from "react";
import { useWindowSize } from 'react-use';

export const Blocks = () => {
  const { mainBlock, otherBlock } = useMemo(() => {
    const index = Math.floor(Math.random() * BLOCKS_DATA.length);
    return {
      mainBlock: BLOCKS_DATA[index],
      otherBlock: BLOCKS_DATA.filter((_, i) => i !== index),
    };
  }, []);

  const { width } = useWindowSize();
  const isLarge = width >= 1024;

  return (
    <div 
      className="px-[5%] py-10 scroll-mt-15"
      id="apartments"
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:min-h-[500px]">
        <Block key={mainBlock.name} name={mainBlock.name} image={mainBlock.image} slug={mainBlock.slug} className="min-h-[300px] lg:min-h-[500px]" animation={1}/>
        <div className="flex flex-col gap-6">
          {otherBlock.map((item, i) => (
            <Block key={item.name} name={item.name} image={item.image} slug={item.slug} className="flex-1 min-h-[300px]" animation={(isLarge) ? 0 : i}/>
        ))}
        </div>
      </div>
    </div>
  );
};

